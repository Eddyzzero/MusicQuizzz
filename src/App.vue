<template>
  <h1>Quiz Musical</h1>
  <router-view></router-view>
  <QuizzView />
  <Button />
</template>

<script>
import Button from "./components/Button.vue";
import QuizzView from "./views/QuizzView.vue";

export default {
  name: "App",

  components: {
    QuizzView,
    Button,
  },
};
</script>
<style></style>

