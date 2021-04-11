import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token") ||''
  },
  mutations: {
    SET_TOKEN:(state, token)=>{
      state.token = token
    }
  },
  actions: {
    //透過this.$store.dispatch觸發方法
    setToken(context,token){
      context.commit('SET_TOKEN',token)
    },

    clearToken(context){
      context.commit('ST_TOKEN', '')
    }
  },
  modules: {
  }
})