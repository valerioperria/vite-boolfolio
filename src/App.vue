<script>
import AppHeader from './components/AppHeader.vue';

export default {
  data() {
    return {}
  },
  components: {
    AppHeader
}
}
</script>

<template>
  <AppHeader />
  <div class="container mt-5">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
