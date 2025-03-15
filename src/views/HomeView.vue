<template>
  <div>
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
