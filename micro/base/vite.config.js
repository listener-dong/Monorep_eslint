import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import vueJsx from '@vitejs/plugin-vue2-jsx'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// 压缩JavaScript
// import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
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
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
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
  }
})
