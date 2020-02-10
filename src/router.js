import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from './pages/Landing'
import ThankYou from './pages/ThankYou'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/thankyou',
      name: 'thankyou',
      component: ThankYou
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
