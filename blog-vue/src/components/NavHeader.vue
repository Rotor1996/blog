<template>
  <div class="NavHeader">
    <div class="logo">小江的树洞</div>
    <div class="menu">
      <span>生</span>
      <el-divider direction="vertical"></el-divider>
      <span>活</span>
      <el-divider direction="vertical"></el-divider>
      <span>阅</span>
      <el-divider direction="vertical"></el-divider>
      <span>游</span>
      <el-divider direction="vertical"></el-divider>
      <span>她</span>
      <el-divider direction="vertical"></el-divider>
      <span>💡</span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'NavHeader',
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
  },
  created () { },
  mounted () { }
}
</script>
<style lang="less" scoped>
.NavHeader {
  display: flex;
  justify-content: space-between;
  font-family: "SemiBold";
  .logo {
    line-height: 100px;
    font-size: @fontC;
    padding-left: 1em;
  }
  .menu {
    line-height: 100px;
    padding-right: 1em;
    span {
      padding: 1em;
    }
  }
}
</style>