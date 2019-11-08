import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index'
import sorry from '@/pages/sorry404'

import login from '@/pages/login'
import register from '@/pages/register'
import findpwd from '@/pages/findpwd'
import my from '@/pages/my'
import History from '@/pages/history'

import newHouse from '@/pages/newHouse'
import resoldApartment from '@/pages/resoldApartment'
import Let from '@/pages/let'


import resoldApartmentDetails from '@/pages/resoldApartmentDetails'
import newHouseDateils from '@/pages/newHouseDateils'
import letDetails from '@/pages/letDetails'

import publishHouse from '@/pages/publishHouse'
import publishRentout from '@/pages/publishRentout'


  

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      mate:["首页"]
    },
    {
      path: '/sorry',
      name: 'sorry',
      component: sorry,
      mate:["404"]
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      mate:["登录"]
    },
    
    {
      path: '/register',
      name: 'register',
      component: register,
      mate:["注册"]
    },
    {
    	
      path: '/findpwd',
      name: 'findpwd',
      component: findpwd,
      mate:["找回密码"]
    },
    {
      path: '/my',
      name: 'my',
      component: my,
      mate:["我的"]
    },
    {
      path: '/newHouse',
      name: 'newHouse',
      component: newHouse,
      mate:["新房"]
    }
    ,
    
    {
      path: '/resoldApartmentDetails',
      name: 'resoldApartmentDetails',
      component: resoldApartmentDetails,
      mate:["二手房详情"]
    },
    {
      path: '/newHouseDateils',
      name: 'newHouseDateils',
      component: newHouseDateils,
      mate:["新房详情"]
    },
    ,
    {
      path: '/letDetails',
      name: 'letDetails',
      component: letDetails,
      mate:["出租房详情"]
    },
     {
      path: '/publishHouse',
      name: 'publishHouse',
      component: publishHouse,
      mate:["卖房"]
    },
    {
      path: '/publishRentout',
      name: 'publishRentout',
      component: publishRentout,
      mate:["发布出租"]
    },
    {
      path: '/resoldApartment',
      name: 'resoldApartment',
      component: resoldApartment,
      mate:["二手房"]
    },
     {
      path: '/let',
      name: 'let',
      component: Let,
      mate:["出租"]
    },
    {
      path: '/history',
      name: 'history',
      component: History,
      mate:["浏览历史"]
    }
  ]
})
