<template>
  <div>
    <i class="el-icon-eleme" style="font-size: 40px" />
    <QlSvgIcon
      name="vue"
      color="red"
      icon-title="svg图标提示语"
      class-name="menu-svg-icon"
    />
    <!-- tailwindcss-config -->
    <div class="text-2xl text-yellow-800">TailWindCss-Config</div>
    <ql-button />
    <p class="tip">I <span class="ti">Comeing</span></p>
    <div class="test">Nan Fang hospity</div>
    <el-button type="success">Submit</el-button>
    <el-button type="warning">warning</el-button>
    <h1>hello</h1>
    <HelloWorld />
    <Bar />
    <el-switch
      v-model="isDark"
      active-color="#13ce66"
      inactive-color="#ff4949"
      @change="changeTheme"
    />
    <!-- 切换 -->
    <div class="mt-4">
      <el-switch
        v-model="isDefauit"
        active-color="#13ce66"
        inactive-color="#ff4949"
        @change="changeDefauit"
      />
    </div>

    <el-card class="w-2/3 mx-auto mt-4">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="活动区域" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker
                placeholder="选择时间"
                v-model="ruleForm.date2"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送" prop="delivery">
          <el-switch v-model="ruleForm.delivery" />
        </el-form-item>
        <el-form-item label="活动性质" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="美食/餐厅线上活动" name="type" />
            <el-checkbox label="地推活动" name="type" />
            <el-checkbox label="线下主题活动" name="type" />
            <el-checkbox label="单纯品牌曝光" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="线上品牌商赞助" />
            <el-radio label="线下场地免费" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即创建</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <div class="w-2/3 mx-auto mt-10">
      <MyTable />
      <!-- 90000 -->
      <el-table :data="tableData" style="width: 100%" class="mt-10" border>
        <el-table-column prop="date" label="日期" width="180" />
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="address" label="地址" />
      </el-table>
    </div>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld'
import { Bar } from '@/components/Bar'
import { QlButton, QlSvgIcon } from 'ql-components'
import MyTable from '@/components/MyTable'

export default {
  components: { HelloWorld, Bar, QlButton, QlSvgIcon, MyTable },
  data() {
    return {
      data: [],
      isDark: false,
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      },
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
      ],
      isDefauit: false
    }
  },
  mounted() {},
  methods: {
    changeTheme(val) {
      // console.log(val)
      if (val) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    changeDefauit(val) {
      if (val) {
        // document.documentElement.classList.add('dark')
        document.body.className = 'defauitTheme'
        // document.documentElement.classList.add('defauitTheme')
      } else {
        document.body.className = ''
      }
    }
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
