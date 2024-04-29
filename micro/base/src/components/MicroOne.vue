<template>
  <div>
    <h1>子应用👇</h1>
    <div>url: {{ url }}</div>
    <!-- name：应用名称, url：应用地址 disableScopecss -->
    <micro-app name="One" :url="url" iframe />
    <el-table :data="tableData" style="width: 100%" class="mt-10" border>
      <el-table-column prop="date" label="日期" width="180" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="address" label="地址" />
    </el-table>
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
        '/child/one',
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods: {}
}
</script>
