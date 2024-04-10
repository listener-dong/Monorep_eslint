# Pnpm Monorepo Eslint Config

## node 版本无限制

pnpm monorepo + vue2.7 + vite + eslint + prettier + stylelint

1. 安装依赖
2. packages 下子应用 eslint 配置都是继承根目录下的 eslint 配置
3. Prettier 和 ESLint
   1. 具有多个项目的大型代码库，每天有多个人在很长的时间内工作，因此编码风格往往不一致。
   2. 在开发过程中捕获常见错误被认为是开发人员的核心工作，而开发人员比较容易犯下愚蠢的错误有：错误的文件导入、未使用的变量、错误的变量命名、访问为定义的变量、重复的定义函数......
   3. 如果使用 Eslint，这些问题都可以避免。
   4. 在 monorepo 中使用 Prettier 和 ESLint 配合效果很好。
   5. 使用 Prettier，你可以在所有项目中保持代码风格的一致性。只需在 monorepo 的根目录中创建一个 .prettierrc 配置文件，它会自动应用在 monorepo 中的所有包上。
   6. 使用 ESLint，可以帮助我们分析 JavaScript 和 TypeScript 代码。和 Prettier 一样，它可以为 monorepos 轻松配置。你只需在 monorepo 的根目录中定义一个 .eslintrc.json 配置文件，它会应用于所有项目。
   7. 但是，如果 monorepo 中有很多文件，Prettier 或 ESLint 可能需要很长时间才能运行。这可以通过将脚本定义添加到本地包的 package.json 来解决，这个文件引用项目根目录中的 Prettier 和 ESLint 配置，这样可以让 Prettier 和 ESLint 只针对特定的包运行。
4. 统一代码规范

```js
// 在使用 Monorepo 进行开发时，为了方便团队协作和代码共享，需要制定统一的代码规范。使用工具如 ESLint、Prettier 等来自动化代码风格的检查和格式化。

// ESLint
// 在根目录下创建 eslint 配置文件，建议使用 .eslintrc.js，可以更方便的匹配不同项目。这里需要注意的是，在不同的项目中，ESLint 所使用的拓展插件也不同，这时可以通过 overrides 来针对不同路径的下的项目进行覆盖：

const path = require('path')

module.exports = {
  overrides: [
    {
      files: ['./packages/vue2/**/*.{js,vue}'],
      extends: ['plugin:vue/essential']
    },
    {
      files: ['./packages/vue3_ts/src/**/*.{ts,tsx,vue}'],
      extends: ['plugin:vue/vue3-essential', '@vue/typescript/recommended']
    }
  ]
}

// 上面的例子展示了对应 vue2 和 vue3 + ts 的不同配置。

// 如果当前子应用使用一些特殊的eslint配置可以通过继承的方式
// ./packages/base/.eslintrc.js
module.exports = {
  // 继承根目录的配置
  extends: ['./../../.eslintrc.js'],
  rules: {
    'no-var': 'error'
  }
}
```

5. .stylelint.js 进行统一样式代码规范子应用可以继承根目录的配置

```json
{
  "stylelint": {
    "extends": "../../.stylelintrc.js",
    "rules": {}
  }
}
```

6. 如果在 pnpm monorepo 中根目录配置的 .eslintignore 文件在子应用中没有生效，可能是由于 ESLint 配置的继承机制导致的。

ESLint 的配置文件支持继承，子应用中的配置文件可以继承根目录的配置。但是，.eslintignore 文件不会被继承，因此在子应用中需要单独配置。

为了解决这个问题，您可以在每个子应用的根目录中创建一个独立的 .eslintignore 文件，并在其中指定要忽略的文件或文件夹。这样，每个子应用都会使用自己的 .eslintignore 文件来忽略特定的文件或文件夹。

请确保在每个子应用中的根目录创建一个 .eslintignore 文件，并在其中指定要忽略的文件或文件夹。这样，每个子应用都可以独立地配置和管理它们自己的 ESLint 忽略规则。

7. .stylelintignore 文件同上。
8. 配置 husky 自动格式化代码
   husky 是一个用于在 Git 钩子中运行脚本的工具。它可以帮助我们确保代码的式和风格一致，从而减少代码审查。

```bash
pnpm install -D husky
```

生成配置文件

```bash
npx husky-init
```

执行此命令后会在根目录下生成个一个.husky 目录，在这个目录下面会有一个 pre-commit 文件，内容如下。

```bash
  #!/bin/sh
. "$(dirname "$0")/_/husky.sh"
. "$(dirname "$0")/common.sh"

[ -n "$CI" ] && exit 0

PATH="/usr/local/bin:$PATH"

# 通过 .lintstagedrc(根目录文件) 配置，在暂存区的文件上执行 lint 检查。
pnpm exec lint-staged
```

`lint-staged` 是一个用于在提交代码之前运行代码检查工具的工具，可以帮助团队维护一致的代码质量和规范,它可以与 git 的 pre-commit 钩子一起使用。

```bash
pnpm add lint-staged -D
```

在根目录下创建 .lintstagedrc 文件，它会执行以下命令对代码进行审查，内容如下：

```bash
  {
    "*.{js,jsx,ts,tsx}": [
      "prettier --cache --ignore-unknown  --write",
      "eslint --cache --fix"
    ],
    "{!(package)*.json,*.code-snippets,.!({browserslist,nvm})*rc}": [
      "prettier --cache --write--parser json"
    ],
    "package.json": ["prettier --cache --write"],
    "*.vue": [
      "prettier --write",
      "eslint --cache --fix",
      "stylelint --fix --allow-empty-input"
    ],
    "*.{css,scss,html}": [
      "prettier --cache --ignore-unknown --write",
      "stylelint --fix --allow-empty-input"
    ],
    "*.md": ["prettier --cache --ignore-unknown --write"]
  }
```

9. 配置 commitlint 校验 git commit 信息
   cmmitlint 是一个用于校验 Git commit 信息的工具。它可以帮助我们确保提交信息符合指定的格式，从而减少代码审查的难度.
   ```bash
   pnpm add @commitlint/config-conventional @commitlint/cli -D
   ```
   在根目录下创建 .commitlintrc.js 文件，内容如下：
   ```js
   export default {
     ignores: [commit => commit.includes('init')],
     extends: ['@commitlint/config-conventional'],
     rules: {
       'body-leading-blank': [2, 'always'],
       'footer-leading-blank': [1, 'always'],
       'header-max-length': [2, 'always', 108],
       'subject-empty': [2, 'never'],
       'type-empty': [2, 'never'],
       'type-enum': [
         2,
         'always',
         [
           'feat', // 新功能（feature）- 用于表示提交包含新功能的更改。
           'fix', // 修复（fix）- 用于表示提交包含修复 bug 的更改。
           'perf', // 性能优化（performance）- 用于表示提交包含针对性能的优化。
           'style', // 代码风格（style）- 用于表示提交包含对代码风格、格式的更改，不涉及代码逻辑的修改。
           'docs', // 文档（docs）- 用于表示提交包含对文档的修改，如 README、文档注释等。
           'test', // 测试（test）- 用于表示提交包含对测试代码的修改。
           'refactor', // 重构（refactor）- 用于表示提交包含对代码结构、逻辑的重构，但不包含新功能或修复 bug。
           'build', // 构建系统（build）- 用于表示提交包含对构建系统或外部依赖的修改。
           'ci', // 持续集成（ci）- 用于表示提交包含对持续集成配置或脚本的修改。
           'chore', // 杂务（chore）- 用于表示提交包含对杂务任务的修改，如更新构建工具、包管理器等。
           'revert', // 回滚（revert）- 用于表示提交是对之前提交的回滚操作。
           'wip', // 进行中（work in progress）- 用于表示提交是正在进行的工作，但尚未完成。
           'workflow', // 工作流（workflow）- 用于表示提交包含对工作流程的修改。
           'types', // 类型定义（types）- 用于表示提交包含对类型定义文件（如 TypeScript 的类型定义）的修改。
           'release' // 发布（release）- 用于表示提交包含对发布过程或版本号的修改。
         ]
       ]
     }
   }
   ```
