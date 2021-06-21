<template>
  <div class="MyLove">
    <el-row :gutter="50">
      <el-col
        :span="8"
        v-for="(list,index) in 9"
        :key="index"
      >
        <div class="item-content">
          <div class="content-top">
            <p>😊</p>
            <p>阴天</p>
            <p>2021-06-21 / 星期一</p>
          </div>
          <div class="content-down">
            <span class="iconfont icon-hangzourenwu">800</span>
            <span class="iconfont icon-tizhong">80kg</span>
            <span class="iconfont icon-tongban">3名</span>
            <span class="iconfont icon-huodong">暂无</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'MyLove',
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
.MyLove {
  width: 90%;
  margin: 0 auto;
  .el-row {
    .el-col {
      margin-bottom: 20px;
      .item-content {
        position: relative;
        height: 300px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        border-radius: 4px;
        box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.06);
        color: #ccc;
        .content-top {
          text-align: center;
          padding: 30px;
        }
        .content-down {
          position: absolute;
          bottom: 0;
          padding: 30px;
          .iconfont {
            padding-right: 10px;
          }
        }
      }
    }
  }
}
</style>