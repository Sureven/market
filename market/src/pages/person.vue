<template>
    <div style="height: 100%;width: 100%">
      <el-container style="height: 100%;width: 100%">
        <el-aside width="200px"><el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" style="height: 100%">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品操作</span>
            </template>
            <el-menu-item-group>
              <template slot="title">选项</template>
              <router-link to="/person/addgoods"><el-menu-item index="1-1">添加商品</el-menu-item></router-link>
              <el-menu-item index="1-2">删除商品</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="购物车">
              <el-menu-item index="1-3">购物车</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <tenplate slot="title">
              <i class="el-icon-menu"></i>
              <span>导航二</span>
            </tenplate>
          </el-menu-item>
          <el-menu-item index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">账号设置</span>
            </template>
          </el-menu-item>
        </el-menu>
        </el-aside>
        <el-container>
          <el-header>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/person' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/person/addgoods' }">增加商品</el-breadcrumb-item>
              <el-breadcrumb-item>购物车</el-breadcrumb-item>
              <el-breadcrumb-item>购买记录</el-breadcrumb-item>
              <span style="float: right;margin-right: 50px">欢迎{{user}}</span>
            </el-breadcrumb>
          </el-header>
          <el-main><router-view/></el-main>
          <el-footer><router-link to="/login"><el-button type="success">退出</el-button></router-link></el-footer>
        </el-container>
      </el-container>
    </div>
</template>

<script>
    export default {
        name: "person",
      data() {
        return {
          user:window.localStorage.getItem('accessUser')
        }
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }

    }
</script>

<style>
  .el-header, .el-footer {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 60px;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
    text-align: center;
  }

  .el-main {
    color: #333;
    text-align: center;
  }
  html, body{
    width: 100%;
    height: 100%;
  }
  .el-breadcrumb {
    height: 60px;
    line-height: 60px;
    font-size: 18px;
  }



</style>
