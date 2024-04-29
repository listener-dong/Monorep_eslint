<template>
  <div>
    <h1 class="text-3xl font-black text-yellow-500 dark:text-green-500">
      PKG-1
    </h1>
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
    <div class="mt-4">
      <el-alert title="成功提示的文案" type="success" effect="dark" />
    </div>
    <div class="mt-4">
      <el-alert title="消息提示的文案" type="info" effect="dark" />
    </div>
    <div class="mt-4">
      <el-alert title="警告提示的文案" type="warning" effect="dark" />
    </div>
    <div class="mt-4">
      <el-alert title="错误提示的文案" type="error" effect="dark" />
    </div>
    <el-table :data="tableData" style="width: 100%" class="mt-10" border>
      <el-table-column prop="date" label="日期" width="180" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="address" label="地址" />
    </el-table>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld'
import { Bar } from '@/components/Bar'
export default {
  components: { HelloWorld, Bar },
  data() {
    return {
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
  mounted() {
    console.log('location', location)
    // console.log('hello')
  }
}
</script>

<style></style>
