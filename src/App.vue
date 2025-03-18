<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>
r
<script>
import Navbar from "./components/Navbar.vue";
import Answer from "./components/Answer.vue";
import Button from "./components/Button.vue";
import "./assets/main.css";

export default {
  name: "App",

  components: {
    Navbar,
    Answer,
    Button,
  },

  data() {},
};
</script>

<style></style>
