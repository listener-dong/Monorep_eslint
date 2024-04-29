<template>
  <div>
    <h1 class="text-3xl font-black text-yellow-500">PKG-2</h1>
    <HelloWorld />
    <Bar />
    <el-row style="margin-bottom: 15px">
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <el-dropdown class="avatar-container" trigger="hover">
      <el-button type="primary">切换主题</el-button>
      <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <el-dropdown-item @click.native="toggleTheme('2bae85')">
          <span style="display: block">亚丁绿</span>
        </el-dropdown-item>

        <el-dropdown-item @click.native="toggleTheme('134fb0')">
          <span style="display: block">火箭蓝</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld'
import { Bar } from '@/components/Bar'
export default {
  components: { HelloWorld, Bar },
  data() {
    return {
      data: []
    }
  },
  mounted() {
    console.log('location', location)
    // console.log('hello')
  },
  methods: {
    toggleTheme(color) {
      this.theme = color
      const __IS_MICRO_APP = window.__MICRO_APP_ENVIRONMENT__
      console.log('__IS_MICRO_APP', __IS_MICRO_APP)
      // bus.$emit('changeTheme', color)
      const __MICO_BODY = __IS_MICRO_APP
        ? document.querySelector('micro-app-body')
        : document.body
      console.log('__MICO_BODY', __MICO_BODY)
      this.toggleClass(__MICO_BODY, `custom-${color}`)
      localStorage.setItem('theme', color)
    },

    toggleClass(element, className) {
      if (!element || !className) {
        return
      }
      element.className = className
    }
  }
}
</script>

<style></style>
