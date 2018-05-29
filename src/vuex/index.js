import Vue from 'vue'
import Vuex from 'vuex'
import appService from '../app.service'
import postsModule from './posts'

Vue.use(Vuex)

const state = {
  isAuthenticated: false
}

const store = new Vuex.Store({
  modules: {
    postsModule
  },
  state,
  getters: {
    // eslint-disable-next-line
    isAuthenticated: state => state.isAuthenticated
  },
  actions: {
    logout (context) {
      context.commit('logout')
    },
    login (context, credentials) {
      return new Promise((resolve) => {
        appService.login(credentials)
          .then((data) => {
            context.commit('login', data)
            resolve()
          })
          .catch(() => window.alert('Could not login!')) // eslint-disable-line no-alert
      })
    }
  },
  mutations: {
    // eslint-disable-next-line
    logout (state) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('token', null)
        window.localStorage.setItem('tokenExpiration', null)
      }
      state.isAuthenticated = false
    },
    // eslint-disable-next-line
    login (state, token) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('token', token.token)
        window.localStorage.setItem('tokenExpiration', token.expiration)
      }
      state.isAuthenticated = true
    }
  }
})

if (typeof window !== 'undefined') {
  // eslint-disable-next-line
  document.addEventListener('DOMContentLoaded', (event) => {
    const expiration = window.localStorage.getItem('tokenExpiration')
    const unixTimestamp = new Date().getTime() / 1000
    if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
      store.state.isAuthenticated = true
    }
  })
}
export default store
