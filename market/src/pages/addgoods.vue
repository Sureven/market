<template>
  <div class="parent">
    <div class="children">
      <el-row>
        <el-col :span="24"><div>增加商品</div></el-col>
      </el-row>
      <el-row type="flex" justify="center" class="margin">
        <el-col :span="8"><div class="tac"><span>商品名:&nbsp&nbsp</span><el-input v-model="goodsname" placeholder="请输入商品名" class="input" ref="goods"></el-input></div></el-col>
      </el-row>
      <el-row type="flex" justify="center" class="margin">
        <el-col :span="8"><div class="tac"><span>价&nbsp&nbsp&nbsp格:&nbsp&nbsp</span><el-input v-model="price" placeholder="请输入价格" class="input" ref="price"></el-input></div></el-col>
      </el-row>
      <el-row type="flex" justify="center" class="margin tac">
        <el-col :span="4" ><el-button type="primary" round style="width: 40%;" @click="add()">添加</el-button></el-col>
      </el-row>
    </div>
  </div>

</template>

<script>
    export default {
        name: "addgoods",
      data() {
        return{
          goodsname:"",
          price:""
        }
      },
      methods: {
        add() {
          if (this.$refs.goods.value == ""|| this.$refs.price.value == "") {
            alert("商品名或价格不能为空")
          } else {
            let params = {
              goodsname: this.goodsname,
              price: this.price
            }
            this.$axios.post('/api/person/addgoods',params)
              .then((response) => {
                // 响应成功回调
                console.log(response)
                if (response.data=="商品存在") {
                  alert("商品存在请重新注册")
                  this.goodsname = '', this.price = ''
                }else{
                  if(response.data=="createAccount successed"){
                    alert("注册成功")
                    /*window.location = "http://localhost:8080/#/Login"*/
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
