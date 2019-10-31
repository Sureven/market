<template>
  <div class="parent">
    <div class="children">
      <el-row>
        <el-col :span="24"><div class="tac">注册</div></el-col>
      </el-row>
      <el-row type="flex" justify="center" class="margin">
        <el-col :span="8"><div class="tac"><span>&nbsp&nbsp&nbsp用户名:&nbsp&nbsp</span><el-input v-model="username" placeholder="请输入用户名" class="input"></el-input></div></el-col>
      </el-row>
      <el-row type="flex" justify="center" class="margin">
        <el-col :span="8"><div class="tac"><span>&nbsp&nbsp&nbsp密&nbsp&nbsp&nbsp码:&nbsp&nbsp</span><el-input v-model="password1" placeholder="请输入密码" class="input" type="password"></el-input></div></el-col>
      </el-row>
      <el-row type="flex" justify="center" class="margin">
        <el-col :span="8"><div class="tac"><span>确认密码:&nbsp&nbsp</span><el-input v-model="password2" placeholder="请再次输入密码" class="input" type="password"></el-input></div></el-col>
      </el-row>
      <el-row type="flex" justify="center" class="margin tac">
        <el-col :span="8" ><el-button type="primary" round style="width: 50%;" @click="register()">确定</el-button></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: "register",
      data(){
        return{
          username:'',
          password1:'',
          password2:''
        }
      },
      methods:{
        register(){
          if(this.username == ""||this.password1 == ""||this.password2 == ''){
            alert("用户名或密码不能为空!")
          }else {
          let params = {
            username : this.username,
            password : this.password1
          }
          if (this.password1==this.password2) {
            this.$axios.post('/api/register',params)
              .then((response) => {
                // 响应成功回调
                console.log(response)
              if (response.data=="用户存在") {
                alert("用户存在请重新注册")
                  this.username = '',
                  this.password1 = '',
                  this.password2 = ''
              }else{
                if(response.data=="createAccount successed"){
                  alert("注册成功")
                  window.location = "http://localhost:8080/#/Login"
                }
              }
              })
          }else {
            alert("两次密码不一致")
              this.password1 = '',
              this.password2 = ''
          }
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
