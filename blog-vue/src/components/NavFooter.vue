<template>
  <div class="NavFooter">
    <div class="motto">我在这里记录我的生活</div>
    <div class="column">
      <span class="iconfont icon-github"></span>
      <span class="iconfont icon-qq"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavFooter',
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () { },
  mounted () { }
}
</script>
<style lang="less" scoped>
.NavFooter {
  height: 100px;
  display: flex;
  justify-content: space-between;
  background-color: @colorB;
  color: @colorG;
  margin-bottom: 5px;
  .motto {
    line-height: 100px;
    font-family: "SemiBold";
    padding-left: 10px;
  }
  .column {
    line-height: 100px;
    .iconfont {
      padding: 0 10px;
      font-size: 30px;
    }
    .icon-github {
      font-size: 33px;
    }
  }
}
</style>