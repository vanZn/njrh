import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'
import Login from '@/pages/Login.vue'
import Welcome from '@/pages/Home/Welcome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      //给路由重定向,让其登陆成功后就先访问welcome页面
      redirect: '/welcome',
      children:[
        {
          path:'welcome',
          component:Welcome
        }
      ]
    },
    {
      path: '/login',
      component:Login
    }
  ]
})
