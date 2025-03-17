<template>
<<<<<<< HEAD
  <h1>Quiz Musical</h1>
  <router-view></router-view>
  <QuizzView />
  <Button />
=======
  <div id="app">
    <NavbarComponent />
    <Answer />
    <router-view />
  </div>
>>>>>>> d5d45fa7bc7de2da22aa0d2c18d8943f82fe309e
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

