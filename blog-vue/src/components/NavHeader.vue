<template>
  <div class="NavHeader">
    <div class="logo">小江的树洞</div>
    <div class="menu">
      <a
        v-for="(item,index) in menu"
        :key="index"
        @click="go(item.name)"
      >
        <span :class="name == item.name ? 'pitch-on':''">{{item.title}}</span>
        <el-divider direction="vertical"></el-divider>
      </a>
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
      name: this.$route.name,
      // name: '',
      data: 1,
      menu: [
        {
          name: 'Record',
          title: '记录'
        },
        {
          name: 'Project',
          title: '项目'
        },
        {
          name: 'Viewing',
          title: '观影读书'
        },
        {
          name: 'Game',
          title: '游戏'
        },
        {
          name: 'MyLove',
          title: '和她'
        },
        {
          name: 'Idea',
          title: '💡'
        },
      ]
    }
  },
  watch: {},
  computed: {},
  methods: {
    go (name) {
      if (name != this.name) {
        this.name = name
        this.$router.push({
          name
        })
      }
    }
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
    line-height: 8rem;
    font-size: @fontC;
    padding-left: 1em;
  }
  .menu {
    line-height: 8rem;
    padding-right: 1em;
    span {
      padding: 1em;
      cursor: pointer;
    }
    span:hover {
      color: @colorC;
    }
    .pitch-on {
      color: @colorA;
      cursor: default;
    }
  }
}
</style>