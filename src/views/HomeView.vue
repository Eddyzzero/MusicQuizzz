<template>
  <div>
<<<<<<< HEAD
    <h2>Bienvenue sur le Quiz Musical</h2>
    <Categories @categorySelected="startQuiz" />
  </div>
</template>

<script>
import Categories from "@/components/Categories.vue";

export default {
  name: "HomeView",
  components: {
    Categories,
  },
  created() {},
  methods: {
    startQuiz(category) {
      this.$router.push(`/quizz/${category.id}`);
    },
  },
};
</script>
=======
    <Answer />
  </div>
</template>
<script>
import Answer from "@/components/Answer.vue";

export default {
  components: {
    Answer,
  },
};
</script>
<style scoped></style>
>>>>>>> d5d45fa7bc7de2da22aa0d2c18d8943f82fe309e
