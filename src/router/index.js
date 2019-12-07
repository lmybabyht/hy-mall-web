import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/Home')
const User = () => import('views/User')
const Login = () => import('views/Login')
const MsgCenter = () => import('views/MsgCenter')
const Search = () => import('views/Search')
const Detail = () => import('views/Detail')
const Order = () => import('views/Order')
const Address = () => import('views/Address')
const Cart = () => import('views/Cart')
const CategoryList = () => import('views/CategoryList')
const UserCollection = () => import('views/UserCollection')
const UserOrder = () => import('views/UserOrder')

//1、安装插件
Vue.use(VueRouter)

//2、创建路由对象router
const routes = [
  { path: '/', name: 'home', component: Home},
  { path: '/user', name: 'user', component: User},
  { path: '/login', name: 'login', component: Login  },
  { path: '/msgCenter', name: 'msgCenter', component:MsgCenter  },
  { path: '/search', name: 'search', component:Search  },
  { path: '/detail', name: 'detail', component:Detail  },
  { path: '/order', name: 'order', component:Order  },
  { path: '/address', name: 'address', component:Address  },
  { path: '/cart', name: 'cart', component:Cart},
  { path: '/categoryList', name: 'categoryList', component:CategoryList},
  { path: '/userCollection', name: 'userCollection', component:UserCollection},
  { path: '/userOrder', name: 'userOrder', component:UserOrder}
]
const router = new VueRouter( {
  routes:routes,
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router


