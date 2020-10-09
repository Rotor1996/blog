<template>
  <div class="NavHeader">
    <div class="logo">小江的树洞</div>
    <div class="menu">
      <a>生</a>
      <a>活</a>
      <a>阅</a>
      <a>游</a>
      <a>她</a>
      <a>💡</a>
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
  }
  .menu {
    line-height: 100px;
    a {
      cursor: pointer;
      padding: 0 1em;
    }
  }
}
</style>