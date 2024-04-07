module.exports = {
  // 指定 ESLint 配置文件的根目录为当前项目根目录
  root: true,
  // 指定代码运行环境为 Node.js 环境
  env: {
    node: true
  },
  // 继承其他 ESLint 配置规则
  extends: [
    // 使用 Vue.js 官方的 ESLint 插件，启用了 Vue.js 项目的基本规则
    'plugin:vue/essential',
    // 使用 ESLint 官方的推荐规则，包含了一些常用的代码风格规范
    'eslint:recommended',
    // 使用 Prettier 插件的推荐规则，将 Prettier 代码格式化工具集成到 ESLint 中
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      // 启用对 JSX 语法的支持
      jsx: true
    }
  },
  rules: {
    // 禁止使用 console 对象，将其视为警告。
    'no-console': 'warn',
    // 禁止使用 var 声明变量，将其视为错误。
    'no-var': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 强制使用严格相等运算符
    eqeqeq: ['error', 'always'],
    // 禁止重复的函数声明
    'no-redeclare': 'error',
    // 禁止使用 eval 函数
    'no-eval': 'error',
    // 禁止在循环中使用 await
    'no-await-in-loop': 'error'
  }
}
