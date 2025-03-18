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
import { types } from "sass";

export default {
  name: "QuizzView",

  props: {
    id: {
      types: String,
      required: true
    }
  },

  components: {
    TitleComponent,
    Answer,
  },
};
</script>
<style></style>
