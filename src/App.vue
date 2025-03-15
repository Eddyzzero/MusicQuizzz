<template>
  <div id="app">
    <NavbarComponent />
    <router-view />
  </div>
</template>

<script>
import NavbarComponent from "../src/components/Navbar.vue";

export default {
  components: {
    NavbarComponent,
  },
};
</script>

<style></style>
