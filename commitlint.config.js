// @ts-check
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
