<template>
  <div class="categories-container">
    <h2 class="category-title">Choisissez une catégorie</h2>
    <p v-if="loading">Chargement des catégories...</p>
    <p v-if="error">{{ error }}</p>
    <div v-else class="category-buttons">
      <router-link
        v-for="category in activeCategories"
        :key="category.id"
        :to="getRouteForCategory(category)"
        class="category-link"
      >
        <div class="category-button">
          {{ category.title }} <br />
          ({{ category.questions_count }} questions)
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from "@/services/api.js";

export default {
  name: "Categories",
  data() {
    return {
      categories: [],
      loading: false,
      error: null,
    };
  },
  computed: {
    activeCategories() {
      return this.categories.filter((category) => category.is_active === 1);
    },
  },
  async created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      this.loading = true;
      try {
        const result = await api.getCategories();
        console.log("Catégories reçues:", result);
        this.categories = result;
      } catch (error) {
        this.error = "Impossible de charger les catégories.";
      } finally {
        this.loading = false;
      }
    },
    getRouteForCategory(category) {
      return category.title === "Blind test"
        ? `/blind-test/${category.id}`
        : `/quizz/${category.id}`;
    },
  },
};
</script>

<style scoped>
.categories-container {
  text-align: center;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: flex-end;
  gap: 20px;
}

.category-title {
  font-size: 1.5rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: var(--font-family);
  font-weight: 700;
  text-transform: uppercase;
}

.category-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  width: 100%;
  padding-bottom: 1vh;
}

.category-link {
  text-decoration: none;
}

.category-button {
  width: 150px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-green);
  color: #000;
  border: 2px solid var(--dark-grey);
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-align: center;
}

.category-button:hover {
  background-color: var(--primary-color);
  color: white;
  transform: scale(1.05);
}

/* Responsive styles */
@media (max-width: 768px) {
  .category-button {
    width: 120px;
    height: 120px;
    font-size: 0.9rem;
  }
}
</style>
