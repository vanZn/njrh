<template>
  <div class="home">
    <el-container>
      <!-- 菜单侧边栏 -->
      <!-- 让菜单收起来的时候左边宽度跟者收起来 将width="200px"里的px删掉-->
      <el-aside width="200">
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header>
          <!-- 头部 -->
          <Header></Header>
        </el-header>
        <el-main>
          <!-- 添加接口 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Menu from "@/components/Home/Menu"
  import Header from "@/components/Home/Header"

  export default {
    components: {
      Menu,
      Header
    }
  }
</script>

<style>
    .el-header, .el-footer {
    /* background-color: #B3C0D1; */
    background-color: cornflowerblue;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .el-container{
    border-left:1px solid #fff; 
  }
  .el-aside {
    background-color: cornflowerblue;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>