<template>
  <div>
    <span
      style="
        padding: 6px 12px;
        text-align: center;
        background-color: aquamarine;
        border: 1px solid red;
      "
      @click="test"
    >
      按钮
    </span>
    <el-button type="primary">TEST</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    test() {
      // console.log('test')
    }
  }
}
</script>
