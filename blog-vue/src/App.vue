<template>
  <div class="app">
    <nav-header v-if="$route.meta.keepAlive"></nav-header>
    <router-view />
    <nav-footer v-if="$route.meta.keepAlive"></nav-footer>
  </div>
</template>

<script>
import NavHeader from './components/NavHeader.vue'
import NavFooter from './components/NavFooter.vue'
export default {
  name: 'App',
  components: {
    NavHeader,
    NavFooter,
  },
  created () { },
}
</script>

<style scoped>
.app {
}
</style>
