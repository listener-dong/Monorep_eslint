<template>
  <div class="px-12">
    <!-- tailwindcss-config -->
    <div class="text-2xl text-yellow-800">TailWindCss-Config</div>
    <ql-button />
    <div class="test">Nan Fang hospity</div>
    <div class="flex">
      <i class="mr-4 el-icon-eleme" style="font-size: 40px" />
      <QlSvgIcon
        class="w-10 h-10"
        name="vue"
        color="red"
        icon-title="svg图标提示语"
        class-name="menu-svg-icon"
      />
    </div>

    <!-- <HelloWorld /> -->
    <!-- <Bar /> -->

    <!-- 主题切换 -->
    <div class="my-4">
      <el-switch
        v-model="isDark"
        active-color="#13ce66"
        inactive-color="#ff4949"
        @change="changeTheme"
        active-text="暗黑"
        inactive-text="亮色"
      />

      <el-switch
        class="ml-16"
        v-model="isDefauit"
        active-color="#13ce66"
        inactive-color="#ff4949"
        @change="changeDefauit"
        active-text="默认"
        inactive-text="自定义"
      />
    </div>
    <!-- 主题切换 -->

    <div
      class="
        text-2xl
        mt-4
        h-[80px]
        text-center
        border border-green-500
        bg-color
        w-[200px]
        font-bold
      "
    >
      <div class="leading-[80px]">主题切换</div>
    </div>

    <el-row type="flex" :gutter="20">
      <el-col :span="12">
        <el-card> <Forms /> </el-card>
      </el-col>

      <!-- 子应用 -->
      <el-col :span="12">
        <el-card> <MicroOne /> </el-card>
      </el-col>
      <!-- 子应用 -->
    </el-row>
  </div>
</template>
<script>
import { QlButton, QlSvgIcon } from 'ql-components'
import MicroOne from '@/components/MicroOne'
import Forms from '@/components/Forms'

export default {
  components: { QlButton, QlSvgIcon, MicroOne, Forms },
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
      isDefauit: false
    }
  },
  mounted() {
    // 加载主题
    document.body.className = `theme-default`
  },
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
          console.log('error submit!!!!')
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
        // document.body.className = 'defauitTheme'
        // document.documentElement.classList.add('defauitTheme')
        document.body.className = `theme-red`
      } else {
        // document.body.className = ''
        document.body.className = `theme-default`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/theme/register.scss';

.tip {
  color: green;

  .ti {
    color: blue;
  }
}
</style>
