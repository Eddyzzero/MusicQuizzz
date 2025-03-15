<template>
  <div id="app">
    <NavbarComponent />
    <Answer />
    <router-view />
  </div>
</template>

<script>
import NavbarComponent from "../src/components/Navbar.vue";
import Answer from "./components/Answer.vue";

export default {
  components: {
    NavbarComponent,
    Answer,
  },
};
</script>

<style></style>
