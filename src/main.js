import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


router.beforeEach((to,from,next)=>{

  const token = localStorage.getItem("token");

  //篩選要傳token的路徑，確認route裡面需要登入的路徑，如需要是true才攔截
  if(to.matched.some(record=> record.meta.requiresAuth)){
    if(token){
      next()
    }else{
      next({path:'/login'})
    }
  }else{
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
