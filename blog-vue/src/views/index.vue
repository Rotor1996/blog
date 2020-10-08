<template>
  <div class="index">
    <div class="welcome-speech">
      <div class="text">
        <p>你好，</p>
        <p>请叫我小江。</p>
        <p>我在这里记录我的生活</p>
        <p>很高兴认识你！</p>
        <div class="index">
          进入世界
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
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
.index {
  height: 100%;
  width: 100%;
  .welcome-speech {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 70%;
    height: 30%;
    margin: auto;
    .text {
      width: 50%;
      margin: auto;
    }
    .index {
      border-top: 1px solid #333333;
      padding-top: 10px;
    }
  }
}
</style>