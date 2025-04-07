<template>
  <div class="home-container">
    <div class="home-content">
      <img src="/images/music-quiz-logo.png" alt="logo" />
      <h2 class="home-title">Bienvenue sur le Quiz Musical</h2>
      <p class="home-subtitle">
        Vous pensez connaître la musique ? Choisissez votre catégorie de quiz,
        répondez aux questions avant la fin du temps imparti et voyez si vous
        pouvez atteindre le sommet du tableau des scores !
      </p>
      <Categories @categorySelected="startQuiz" />
    </div>
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
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.home-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-image: url("/images/music-quiz-background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;
}

.home-content {
  width: 100%;
  max-width: 800px;
  padding: 3rem 2rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.home-content img {
  width: 500px;
  height: auto;
  margin-bottom: 1rem;
}

.home-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: var(--font-family);
  font-weight: 700;
  text-transform: uppercase;
}

.home-subtitle {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  font-family: var(--font-family);
  font-weight: 400;
  line-height: 1.3rem;
}

/* Media Queries */

/* XS: Up to 480px */
@media screen and (max-width: 480px) {
  .home-content img {
    width: 200px;
  }

  .home-title {
    font-size: 1.5rem;
  }

  .home-subtitle {
    font-size: 0.9rem;
  }
}

/* SM: 481px to 768px */
@media screen and (min-width: 481px) and (max-width: 768px) {
  .home-content img {
    width: 250px;
  }

  .home-title {
    font-size: 2rem;
  }

  .home-subtitle {
    font-size: 0.95rem;
  }
}

/* MD: 769px to 1024px */
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .home-content img {
    width: 300px;
  }

  .home-title {
    font-size: 2.5rem;
  }

  .home-subtitle {
    font-size: 1rem;
  }
}

/* XL: 1025px to 1440px */
@media screen and (min-width: 1025px) and (max-width: 2560px) {
  .home-content img {
    width: 350px;
  }

  .home-title {
    font-size: 2.8rem;
  }
}
</style>
