<template>
  <div id="app">
    <NavbarComponent />
    <router-view />
  </div>
</template>

<script>
import NavbarComponent from "../src/components/Navbar.vue";
import Answer from "./components/Answer.vue";
import "./assets/main.css";

export default {
  name: "App",

  data() {},

  components: {
    NavbarComponent,
    Answer,
  },
};
</script>

<style></style>
