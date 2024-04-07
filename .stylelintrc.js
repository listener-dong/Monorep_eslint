// .stylelintrc.js
module.exports = {
  // 指定使用 stylelint-processor-html 处理器，允许在 HTML 文件中使用 <style> 标签中的 CSS 代码
  processors: ['stylelint-processor-html'],
  // 继承其他 Stylelint 配置规则
  extends: [
    // 使用 Stylelint 官方的标准规则，包含了一些常用的 CSS 代码风格规范
    "stylelint-config-standard",
    // 使用 Stylelint 官方的 HTML/Vue 规则，适用于处理 HTML 和 Vue 文件中的 CSS 代码
    "stylelint-config-html/vue",
    // 使用 Stylelint 官方的顺序规则，强制按照一定的顺序编写 CSS 属性
    "stylelint-config-recess-order",
  ],
  // 根据文件类型进行额外的配置
  overrides: [
    {
      // 这里不需要写 css 写了 会被忽略掉
      files: ["**/*.(html|vue)"],
      customSyntax: "postcss-html",
    },
    {
      files: ["*.scss", "**/*.scss"],
      customSyntax: "postcss-scss",
      extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-recommended-vue/scss",
      ],
    },
  ],
  rules: {
    // 禁用类选择器名称的模式检查
    "selector-class-pattern": null,
    // 禁用降低优先级的样式规则
    "no-descending-specificity": null,
    // 禁止使用未知的伪类选择器，但允许使用 deep 和 global 伪类选择器
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["deep", "global"],
      },
    ],
    // 禁止使用未知的伪元素选择器，但允许使用 v-deep、v-global 和 v-slotted 伪元素选择器
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep", "v-global", "v-slotted"],
      },
    ],
    // 禁止使用未知的 At 规则，但允许使用一些特定的 At 规则，如 tailwind、apply、variants 等
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "function",
          "if",
          "each",
          "include",
          "mixin",
          "use",
        ],
      },
    ],
    // 在规则之前要求空行，忽略注释之后和第一个嵌套规则之前的空行
    "rule-empty-line-before": [
      "always",
      {
        ignore: ["after-comment", "first-nested"],
      },
    ],
    // 禁止使用未知的 CSS 单位，但允许使用 rpx 单位
    "unit-no-unknown": [true, { ignoreUnits: ["rpx"] }],
    // 强制按照一定的顺序编写 CSS 属性，优先处理声明、带有块的 At 规则，然后是普通规则
    "order/order": [
      "declarations",
      { type: "at-rule" },
      { type: "at-rule", hasBlock: true },
      "rules",
    ],
  },
};
