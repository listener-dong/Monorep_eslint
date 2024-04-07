<template>
  <div>
    <h1>hello</h1>
    <HelloWorld />
    <Bar />
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
import { Bar } from './components/HelloWorld'
export default {
  components: { HelloWorld, Bar },
  data() {
    return {
      data: []
    }
  },
  mounted() {
    // console.log('hello')
  }
}
</script>

<style>
div {
  position: relative;
  top: 10px;
  color: red;
}
</style>
