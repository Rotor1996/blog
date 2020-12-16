<template>
  <div class="Project">
    <el-row :gutter="100">
      <el-col
        :span="6"
        v-for="(list,index) in 8"
        :key="index"
      >
        <div
          class="item-content"
          style="background-image: url('https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png');"
        >
          <el-tag>123</el-tag>
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
.Project {
  position: static;
  padding: 40px;
  .el-col {
    margin-bottom: 20px;
    height: 100px;
  }
  .item-content {
    height: 300px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
</style>