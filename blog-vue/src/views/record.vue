<template>
  <div class="record">
    <div class="header">

    </div>
    <div class="block">
      <el-timeline>
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
      </el-timeline>
    </div>
    <div class="pagination">
      <el-pagination
        background
        :page-size="pagesSize"
        :pager-count="3"
        layout="prev, pager, next"
        :total="100"
      >
      </el-pagination>
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
    /deep/.el-card__body {
      display: flex;
      justify-content: space-between;
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