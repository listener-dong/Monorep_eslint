<template>
  <div>
    <h1>子应用👇</h1>
    <div>url: {{ url }}</div>
    <!-- name：应用名称, url：应用地址 disableScopecss -->
    <micro-app name="One" :url="url" iframe />
  </div>
</template>

<script>
export default {
  data() {
    return {
      url:
        'http://' +
        location.hostname +
        (import.meta.env.MODE === 'development' ? ':3001' : '') +
        '/child/one'
    }
  },
  methods: {}
}
</script>
