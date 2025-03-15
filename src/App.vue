<template>
<<<<<<< HEAD
  <QuizzView />
  <Button />
</template>

<<<<<<< HEAD
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
=======
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

>>>>>>> feature/Navbar
<style></style>
=======
<script></script>
>>>>>>> feature/Answer
