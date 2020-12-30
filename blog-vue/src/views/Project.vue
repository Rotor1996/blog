<template>
  <div class="Project">
    <el-row :gutter="50">
      <el-col
        :span="6"
        v-for="(list,index) in 8"
        :key="index"
      >
        <div
          class="item-content"
          style="background-image: url('https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png');"
        >
          <div class="tag">分类</div>
          <div class="tag">项目名称</div>
          <div class="tag">使用技术</div>
          <div class="tag">时间/进度</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Project',
  components: {},
  props: {},
  data () {
    return {
      list: [],
      dialogTableVisible: true
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
.Project {
  // position: static;
  padding: 40px;
  .el-col {
    margin-bottom: 20px;
  }
  .item-content {
    height: 300px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 4px;
    .tag {
      width: fit-content;
      width: -webkit-fit-content;
      width: -moz-fit-content;
      background: rgba(0, 0, 0, 0.5);
      padding: 4px 10px;
      color: #ffffff;
      transition: all 0.3s ease-in-out;
      margin: 5px 10px;
    }
  }
}
</style>