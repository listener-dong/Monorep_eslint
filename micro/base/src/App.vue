<template>
  <div>
    <!-- tailwindcss-config -->
    <div class="text-2xl text-yellow-800">TailWindCss-Config</div>
    <ql-button />
    <p class="tip">I <span class="ti">Comeing</span></p>
    <div class="test">Nan Fang hospity</div>
    <el-button type="success">Submit</el-button>
    <el-table />
    <el-table :data="data" style="width: 100%">
      <el-table-column type="设置类型"> </el-table-column>
      <el-table-column
        prop="渲染绑定的表数据tableDate中的哪个数据"
        label="显示名字"
        width="180"
      >
      </el-table-column>
    </el-table>
    <h1>hello</h1>
    <HelloWorld />
    <Bar />
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { Bar } from './components/HelloWorld'
import { QlButton } from 'ql-components'
export default {
  components: { HelloWorld, Bar, QlButton },
  data() {
    return {
      data: []
    }
  },
  mounted() {
    // let abc = 'hello'
    // console.log('world')
  }
}
</script>

<style lang="scss" scoped>
@import url('./index.scss');

.tip {
  color: green;

  .ti {
    color: blue;
  }
}
</style>
