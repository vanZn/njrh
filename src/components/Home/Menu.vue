<template>
  <el-row>
    <el-col :span="24">
      <h5 class="logo">润华</h5>
      <!-- collapse属性值为true/false代表菜单栏的收起与展开
        他的值需要根据header中的图标被点击时，进行响应的切换，
        所以用到多个组件之间共享状态即store.state
       -->
       <!-- router属性代表：是否使用 vue-router 的模式，
       启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
      <el-menu default-active="2" class="el-menu-vertical-demo" 
      :collapse="$store.state.menu_collapse" :router="true">
        <el-menu-item index="welcome">
          <i class="el-icon-menu"></i>
          <span slot="title">管理首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>学员管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title">
              <el-menu-item index="item">
                <i class="el-icon-folder-add"></i>
                <span slot="title">学员项目管理</span>
              </el-menu-item>
            </template>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">考勤管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-s-custom"></i>
          <span slot="title">我的中心</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-s-data"></i>
          <span slot="title">数据统计</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<style>
/* 解决收放时不平滑过度的问题 */
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

.logo{
    height: 60px;
    line-height: 60px;
    width: 100%;
    color:#fff;
    font-size: 16px
}
</style>