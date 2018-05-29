// eslint-disable-next-line
import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Category from '../components/Category'
import Login from '../components/Login'
import NotFound from '../components/NotFound'
// const Category = () => import('../components/Category')
// const Login = () => import('../components/Login')
// const NotFound = () => import('../components/NotFound')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  // eslint-disable-next-line
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  routes: [
    { path: '/login', component: Login },
    { path: '/category/:id', name: 'category', component: Category },
    { path: '/', redirect: '/category/front-end' },
    { path: '*', component: NotFound }
  ]
})

export default router

