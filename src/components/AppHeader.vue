<template>
  <nav class="nav has-shadow">
    <div class="container">
      <router-link to="/category/front-end" exact>
        <img src="http://bit.ly/vue-img" alt="Vue SPA" />
      </router-link>
      <router-link class="nav-item is-tab" to="/category/front-end">Front-end</router-link>
      <router-link class="nav-item is-tab"
        :to="{ name: 'category', params: { id: 'mobile' } }">Mobile</router-link>
      <router-link class="nav-item is-tab" to="/login">
        <span v-if="isAuthenticated">Logout</span><span v-else>Login</span>
      </router-link>
    </div>
  </nav>
</template>
<style scoped>
.nav {
  background-color: #fff;
  height: 3.25rem;
  position: relative;
  text-align: left;
  z-index: 10;
  align-items: stretch;
  display: flex;
}
.nav.has-shadow {
  box-shadow: 0 2px 3px hsla(0,0%,4%,.1);
}
.nav > .container {
  min-height: 3.25rem;
}
</style>
<script>
// import eventBus from '../event-bus'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}
</script>
