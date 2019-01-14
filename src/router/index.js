import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import code from '@/components/code'
import loseefficacy from '@/components/loseefficacy'


Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/code',
      name: 'code',
      component: code
    },{
      path:'/loseefficacy',
      name:'loseefficacy',
      component: loseefficacy
    }
  ]
})
