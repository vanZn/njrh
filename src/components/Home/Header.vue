<template>
  <el-row type="flex" class="row-bg" justify="space-between">
    <el-col :span="6">
      <div class="grid-content icon-change">
          <i class="el-icon-set-up" @click="changeMenu">
          </i>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content title">
          教育
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content userInfo">
        <!-- href里面这样写代表阻止跳转 -->
          欢迎你<a href="javascript:;" class="nickname">{{$store.state.nickname}}</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="javascript:;" class="quit" @click="quit">退出</a>
      </div>
    </el-col>
  </el-row>
</template>

<script>
//映射缩放菜单栏的方法
    import {mapMutations} from "vuex"
    export default {
        methods: {
            ...mapMutations(["changeMenu"]),
            //退出功能
            quit(){
              //清除qxtoken
              //跳转到login也页面
              localStorage.removeItem("qxtoken")
              this.$router.push("/login")
            }
        }
    }
</script>

<style scoped>
  .icon-change {
    text-align: left;
    font-size: 30px;
    /* 鼠标放上去变为手形 */
    cursor: pointer;
  }
  .userInfo{
    text-align:right;
    color:antiquewhite
  }
  .quit{
    color:red
  }
</style>
