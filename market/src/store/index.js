  import Vue from 'vue'
  import Vuex from 'vuex'
  Vue.use(Vuex)
  const state = {
    name:"",
    login:true
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
    }
  }
  const actions = {
    actfunName(context,username){
      context.commit('funName',username)
    },
    actfunLogin({commit}, bol) {
      commit('funLogin',bol)
    }
  }
  const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
  })
  export default store
