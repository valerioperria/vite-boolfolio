<script>
import AppMain from './components/AppMain.vue';
export default {
  data() {
    return {

    }
  },
  components: {
    AppMain,
  }
}
</script>

<template>
  <div class="container">
    <h1>Start</h1>
    <div>
      <AppMain />
    </div>
  </div>
</template>

<style lang="scss">
@use './assets/style/general.scss' as *;
</style>
