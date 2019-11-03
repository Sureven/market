  import Vue from 'vue'
  import Vuex from 'vuex'
  Vue.use(Vuex)
  const state = {
    name:"",
    login:true,
    shoplist:[]
  }
  const getters = {
    showName(state){
      return state.name
    },
    isLogin(state){
      return state.login
    }
  }
  const mutations = {
    funName(state,username){
      state.name = username
    },
    funLogin(state,bol){
      state.login = bol
    },
    add(state,data) {
      // state.added 对象中定义了一个数组added，用来存放已经添加到购物车的商品对象
      let record = state.shoplist.find(n => n.goodsname == data.goodsname) // 若这个数组中有和这次添加的新增物品id相同时
      // console.error(record)
      if (!record) { // 满足这个表示 商品没有添加过
        var num = 1
        let total = num *data.price
        state.shoplist.push({
          goodsname:data.goodsname,
          price:data.price,
          num:num,
          total:total
        })
      } else {
        record.num++
        record.total = record.num *record.price
      }
    }
  }
  const actions = {
    actfunName(context,username){
      context.commit('funName',username)
    },
    actfunLogin({commit}, bol) {
      commit('funLogin',bol)
    },
    addtocar(context,data){
      context.commit('add',data)
    }
  }
  const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
  })
  export default store
