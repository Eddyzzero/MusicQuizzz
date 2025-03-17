<template>
  <header>
    <TitleComponent />
  </header>
  <section>
    <Answer />
  </section>
</template>

<script>
import Answer from "@/components/Answer.vue";
import TitleComponent from "../components/title.vue";

export default {
  name: "QuizzView",

  components: {
    TitleComponent,
    Answer,
  },
};
</script>
<style></style>
