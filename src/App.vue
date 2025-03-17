<template>
  <div id="app">
    <NavbarComponent />
    <Answer :answers="answers" />
    <router-view />
  </div>
</template>

<script>
import NavbarComponent from "../src/components/Navbar.vue";
import Answer from "./components/Answer.vue";

export default {
  name: "App",

  data() {
    return {
      answers: [],
    };
  },

  components: {
    NavbarComponent,
    Answer,
  },
};
</script>

<style></style>
