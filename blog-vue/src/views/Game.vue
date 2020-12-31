<template>
  <div class="Game">
    <el-row>
      <el-col
        :span="6"
        v-for="(list,index) in 8"
        :key="index"
      >
        <div class="box">
          <div
            class="content"
            style="background-image:url('https://media.st.dl.pinyuncloud.com/steam/clusters/sale_autumn2019_assets/54b5034d397baccb93181cc6/hero_1097150_english.jpg?t=1608659697')"
          >
            <div class="text">
              <div class="name">入手价格</div>
              <div class="price">评价</div>
            </div>
            <div class="text-hover">
              <div class="name">游戏名称</div>
              <div class="">开发商</div>
              <div class="comment">最近一次游戏体验</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Game',
  components: {},
  props: {},
  data () {
    return {
      list: []
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
.Game {
  .el-col {
    margin: 30px 0;
    .box {
      display: flex;
      justify-content: center;
      .content {
        width: 300px;
        height: 400px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: relative;
        border-radius: 4px;
        box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.6);
        .text {
          position: absolute;
          display: flex;
          bottom: 30px;
          right: 0px;
          background-color: @colorA;
          color: #ffffff;
          padding: 5px;
          z-index: 1;
          .name {
            padding: 0 10px;
          }
        }
        .text-hover {
          display: none;
        }
      }
      .content:hover {
        position: relative;
        .text-hover {
          position: absolute;
          display: block;
          width: 100%;
          height: 300px;
          background-color: @colorB;
          color: #ffffff;
          bottom: 0;
          z-index: 0;
        }
      }
    }
  }
}
</style>