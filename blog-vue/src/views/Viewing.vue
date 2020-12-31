<template>
  <div class="Viewing">
    <el-row :gutter="50">
      <el-col
        :span="6"
        v-for="(list,index) in 8"
        :key="index"
      >
        <div class="box">
          <div class="header">
            <div
              class="bg"
              style="background-image:url('https://cdn.share-man.com/image/movie/c1df1c339096ab16629b3959548e001e.webp')"
            ></div>
            <el-image
              class="img"
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            ></el-image>
          </div>
          <div class="content">
            <div class="title">标题</div>
            <div class="classify">分类<span>电影</span></div>
            <div class="figure">观影人<span>小江</span><span>小刘</span></div>
            <div class="time">时间<span>2021-01-01</span></div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Viewing',
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
.Viewing {
  padding: 40px;
  .el-row {
    padding: 10px;
  }
  .el-col {
    margin-bottom: 20px;
    .box {
      border-radius: 4px;
      box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.06);
      .header {
        position: relative;
        width: 100%;
        height: 320px;
        overflow: hidden;
        border-radius: 4px;
        .bg {
          z-index: 1;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          opacity: 0.4;
          background-position: 50%;
          background-size: cover;
          -webkit-box-shadow: 0 -40px 30px 40px #fff inset;
          box-shadow: inset 0 -40px 30px 40px #fff;
          -webkit-filter: blur(6px);
          filter: blur(6px);
          -webkit-transform: scale(1.3);
          transform: scale(1.3);
        }
        .img {
          position: absolute;
          left: 0;
          right: 0;
          top: 30px;
          bottom: 0;
          z-index: 2;
          margin: 0 auto;
          width: 200px;
          height: 270px;
          cursor: pointer;
          -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
          border-radius: 2px;
        }
      }
      .content {
        color: @colorD;
        padding: 10px;
        line-height: 30px;
        .title {
          text-align: center;
          font-size: @fontG;
        }
        span {
          padding: 0 5px;
        }
      }
    }
  }
}
</style>