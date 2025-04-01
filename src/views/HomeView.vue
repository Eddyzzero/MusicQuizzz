<template>
  <div class="home-container">
    <h2 class="home-title">Bienvenue sur le Quiz Musical</h2>
    <p class="home-subtitle">
      Vous pensez connaître la musique ? Choisissez votre catégorie de quiz,
      répondez aux questions avant la fin du temps imparti et voyez si vous
      pouvez atteindre le sommet du tableau des scores !
    </p>
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
  methods: {
    startQuiz(category) {
      this.$router.push(`/quizz/${category.id}`);
    },
  },
};
</script>

<style scoped>
.home-container {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background-image: url("/public/images/music-quiz-background..jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.home-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: var(--font-family);
  font-weight: 700;
  position: absolute;
  top: 62%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 2rem;
  }
}

.home-subtitle {
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  font-family: var(--font-family);
  font-weight: 700;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.8rem;
  }
}
</style>
