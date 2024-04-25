<!-- <template>
  <div>test</div>
</template> -->
<script lang="jsx">
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'i am sfc HelloWorld'
    }
  },
  created() {
    setTimeout(() => {
      this.msg = 'i am sfc HelloWorld_setTimeout'
    }, 1000)
  },
  render() {
    return <h1>{this.msg}</h1>
  }
}
</script>
