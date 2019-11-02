import Vue from 'vue'
import Router from 'vue-router'
import Login from  "../pages/login"
import Register from  "../pages/register"
import Person from "../pages/person"
import Addgoods from "../pages/addgoods"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/login",
      name:"Login",
      component:Login
    },
    {
      path:"/register",
      name:"Register",
      component:Register
    },
    {
      path:"/person",
      name:"Person",
      component:Person,
      children:[
        {
          path:"addgoods",
          component:Addgoods
        }
        ]
    },
    {
      path:"/",
      redirect:"/Login"
    }
  ]
})
