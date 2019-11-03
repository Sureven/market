<template>
    <div>
      <el-table
        :data="tableData"
        align="center"
        style="width: 100%">
        <el-table-column
          prop="_id"
          label="id"
          width="200"
          align="center">
        </el-table-column>
        <el-table-column
          prop="goodsname"
          label="商品名称"
          width="500"
          align="center">
        </el-table-column>
        <el-table-column
          prop="price"
          label="价格"
          width="200"
          align="center">
        </el-table-column>
        <el-table-column
          label="操作"
          width="100"
          align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="adds(scope.row.goodsname,scope.row.price)">增加</el-button>
            <el-button type="text" size="small">减少</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="primary" @click="search()" style="margin-top: 20px">刷新商品</el-button>
      <el-table
        :data="carlist"
        align="center"
        style="width: 100%"
        show-summary>
        <el-table-column
          prop="goodsname"
          label="商品名称"
          width="200"
          align="center">
        </el-table-column>
        <el-table-column
          prop="price"
          label="价格"
          width="200"
          align="center"
          >
        </el-table-column>
        <el-table-column
          prop="num"
          label="数量"
          width="500"
          align="center">
        </el-table-column>
        <el-table-column
          prop="total"
          label="总价"
          width="500"
          align="center">
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
        name: "shoppingcar",
      data(){
          return{
            tableData: [
            /*{ id: 11, goodsname: '鱼香肉丝', price: 12 },
            { id: 12, goodsname: '宫爆鸡丁', price: 12 },
            { id: 13, goodsname: '红烧猪蹄', price: 28 },
            { id: 14, goodsname: '精致小菜', price: 10 },
            { id: 15, goodsname: '米饭', price: 2 }*/
       ],
            carlist:[]
          }
      },
      beforeCreate(){
        this.$axios.get('/api/person/shoppingcar')
          .then((res) =>{
            //console.log(res.data[0])
            for(let i = 0; i < res.data.length; i ++){
              this.$set(this.tableData,i,res.data[i])
            }
            //console.log(this.tableData)
          })
      },
        methods:{
          search(){
            this.$axios.get('/api/person/shoppingcar')
              .then((res) =>{
                //console.log(res.data[0])
                for(let i = 0; i < res.data.length; i ++){
                  this.$set(this.tableData,i,res.data[i])
                }
                //console.log(this.tableData)
              })
          },
          adds(goodsname,price){
            //console.log(goodsname)
            this.$store.dispatch('addtocar',{goodsname,price})
            for(let i = 0; i < this.$store.state.shoplist.length; i ++){
              this.$set(this.carlist,i,this.$store.state.shoplist[i])
            }
            //console.log(this.carlist)
          }


        }
    }
</script>

<style>

</style>
