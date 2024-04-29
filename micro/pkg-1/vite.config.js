import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import vueJsx from '@vitejs/plugin-vue2-jsx'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/child',
  plugins: [
    vue(),
    vueJsx({}),
    createSvgIconsPlugin({
      // 指定路径在你的src里的svg存放文件
      iconDirs: [path.resolve(process.cwd(), 'src/assets')],
      // 指定symbolId格式
      symbolId: '[name]'
    })
  ],
  server: {
    port: 3001
  },
  resolve: {
    // 配置模块别名
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      // 处理 vue2.7 + vite 导致 el-table 不展示的问题
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm.js'
      }
    ],
    // 导入模块时省略文件的扩展名
    extensions: ['.js', '.vue', '.jsx', 'tsx', '.json']
  },
  build: {
    // https://cn.vitejs.dev/guide/build.html#browser-compatibility
    target: 'es2015',
    sourcemap: false,
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 4000,
    rollupOptions: {
      output: {
        manualChunks: {
          // element-ui 单独打包
          'element-ui': ['element-ui']
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 引入全局 scss 入口文件
        additionalData: `@import "@/style/index.scss";`
      }
    }
  }
})

// npm i @vitejs/plugin-vue2-jsx
