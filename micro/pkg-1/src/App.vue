<template>
  <div>
    <h1 class="text-3xl font-black text-yellow-500">PKG-1</h1>
    <HelloWorld />
    <Bar />
    <el-button type="danger">子应用</el-button>
    <el-button type="primary">Primary</el-button>
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
  }
}
</script>

<style></style>
