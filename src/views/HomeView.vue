<template>
  <div>
    <h2>Bienvenue sur le Quiz Musical</h2>
    <Categories @categorySelected="startQuiz" />
    <Answer />
  </div>
</template>

<script>
import Categories from "@/components/Categories.vue";
import Answer from "@/components/Answer.vue";
export default {
  name: "HomeView",
  components: {
    Categories,
    Answer,
  },
  created() {},
  methods: {
    startQuiz(category) {
      this.$router.push(`/quizz/${category.id}`);
    },
  },
};
</script>
