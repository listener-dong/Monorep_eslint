// import type { Config } from "tailwindcss";

const config = {
  // 该selector策略取代了classTailwind CSS v3.4.1 中的策略
  darkMode: 'selector',
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx,mdx}',
    'node_modules/ql-styles/**/*.{vue,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'red'
      }
    }
  }
  // ... 其他配置
}

export default config
