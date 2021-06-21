<template>
  <div class="record">
    <div class="header">

    </div>
    <div class="block">
      <div
        class="timeline-item"
        v-for="(list,index) in 8"
        :key="index"
      >
        <div class="timeline-item-date-icon">
          <i class="el-icon-date"></i>
        </div>
        <el-card shadow="hover">
          <img
            height="100%"
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          >
          <div class="card-text">
            <div class="text-top">更新 Github 模板</div>
            <div class="text-middle">我今天开始写博客了，我今天开始写博客了，我今天开始写博客了，我今天开始写博客了，我今天开始写博客了，我今天开始写博客了，我今天开始写博客了，我今天开始写博客了，我今天开始写博客了</div>
            <div class="text-bottom">王小虎 提交于 2018/4/12 20:46</div>
          </div>
        </el-card>
      </div>
      <!-- <el-timeline>
        <el-timeline-item
          v-for="(list,index) in 5"
          :key="index"
          timestamp="2018/4/12"
          placement="top"
        >
          <el-card shadow="hover">
            <div class="card-left">
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/12 20:46</p>
            </div>
            <img
              width="100rem"
              height="100rem"
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
          </el-card>
        </el-timeline-item>
      </el-timeline> -->
    </div>
    <div class="pagination">
      <!-- <el-pagination
        background
        :page-size="pagesSize"
        :pager-count="3"
        layout="prev, pager, next"
        :total="100"
      >
      </el-pagination> -->
    </div>
  </div>

</template>

<script>
export default {
  name: 'record',
  components: {},
  props: {},
  data () {
    return {
      list: [],
      pagesSize: 4,
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
.record {
  .block {
    position: relative;
    margin: auto;
    overflow: hidden;
    padding-top: 60px;
    padding-bottom: 120px;
    /deep/ .timeline-item {
      width: calc(50% - 80px);
      float: left;
      padding: 20px;
      clear: both;
      text-align: right;
      .el-card__body {
        display: flex;
        padding: 0;
        justify-content: space-between;
        height: 210px;
        color: #666;
        .card-text {
          height: auto;
          padding: 0 30px;
          .text-top {
            padding-top: 10px;
          }
          .text-middle {
            padding: 10px 0;
            height: 60%;
          }
        }
      }
    }
    /deep/ .timeline-item:nth-child(2n) {
      text-align: left;
      float: right;
      padding: 0;
      .el-card__body {
        display: flex;
        flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
      }
    }
    .timeline-item .timeline-item-date-icon {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      height: auto;
      background-color: #ffffff;
      border-radius: 100%;
      box-shadow: 0 0 4px hsla(0, 0%, 69.4%, 0.4);
      z-index: 1;
      .el-icon-date {
        padding: 15px;
        font-size: 20px;
        color: #666;
      }
    }
    .timeline-item::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      height: auto;
      bottom: 0;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      width: 4px;
      background-color: #f1f1f1;
    }
  }
  .pagination {
    text-align: center;
    /*水平居中*/
    left: 50%;
    margin: 10px;
    /deep/ .el-pagination.is-background .el-pager li:not(.disabled).active {
      background-color: @colorB;
    }
  }
}
</style>