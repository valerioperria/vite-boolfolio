<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'home',
          title: 'Home'
        },
        {
          name: 'about-us',
          title: 'About Us'
        },
      ]
    }
  }
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" style="color: white">Boolfolio</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="ms-auto navbar-nav">
          <li class="nav-item" v-for="link in links" :key="link.title">
            <router-link :to="{name: link.name}" class="nav-link" style="color: white">{{ link.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>