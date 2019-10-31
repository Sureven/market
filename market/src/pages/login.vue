<template>
  <div class="parent">
    <div class="children">
      <el-row>
        <el-col :span="24"><div class="tac">登录</div></el-col>
      </el-row>
      <el-row type="flex" justify="center" class="margin">
        <el-col :span="8"><div class="tac"><span>用户名:&nbsp&nbsp</span><el-input v-model="username" placeholder="请输入用户名" class="input" ref="user"></el-input></div></el-col>
      </el-row>
      <el-row type="flex" justify="center" class="margin">
      <el-col :span="8"><div class="tac"><span>密&nbsp&nbsp&nbsp码:&nbsp&nbsp</span><el-input v-model="password" placeholder="请输入密码" class="input" type="password" ref="psd"></el-input></div></el-col>
      </el-row>
      <el-row type="flex" justify="center" class="margin tac">
        <el-col :span="4" ><router-link to="/register"><el-button type="primary" round style="width: 40%;">注册</el-button></router-link></el-col>
        <el-col :span="4" ><el-button type="primary" round style="width: 40%;" @click="login()">登录</el-button></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login",
      data() {
          return{
            username:"",
            password:""
          }
      },
      methods: {
        login() {
          if (this.$refs.user.value == ""|| this.$refs.psd.value == "") {
            alert("用户名或密码不能为空")
          } else {
            let params = {
              username: this.username,
              password: this.password
            }
            this.$axios.post('/api/login', params)
              .then((response) => {
                if (response.data == "用户不存在") {
                  alert("不存在用户请注册")
                  window.location = "http://localhost:8080/#/register"
                } else {
                  // 响应成功回调3
                  if (response.data.length == 1) {
                    alert("登录成功")
                  } else {
                    alert("用户名或密码错误")
                    this.username = "";
                    this.password = ""
                  }
                }
              })
          }
        }
      }
    }
</script>

<style>
  .tac {
    text-align: center;
  }
  .input {
    width: 55%;
  }
  .margin {
    margin-top: 50px;
  }
  .parent {
    width: 100%;
    height: 600px;
    position: relative;
  }
.children{
  width: 100%;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -50%;
  margin-top: -150px;
}

</style>
