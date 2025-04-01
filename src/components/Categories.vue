<template>
  <div>
    <h2 class="category-title">Choisissez une catégorie</h2>
    <p v-if="loading">Chargement des catégories...</p>
    <p v-if="error">{{ error }}</p>
    <div v-else>
      <router-link
        v-for="category in activeCategories"
        :key="category.id"
        :to="getRouteForCategory(category)"
      >
        <div class="category-button">
          <Button size="small" customClass="secondary">
            {{ category.title }} ({{ category.questions_count }} questions)
          </Button>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from "@/services/api.js";
import Button from "@/components/Button.vue";

export default {
  name: "Categories",
  components: {
    Button,
  },
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
router-link {
  text-decoration: none;
}

.category-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--light-grey);
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.8rem;
    flex-direction: column;
  }
}

.category-title {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: var(--font-family);
  font-weight: 700;
  position: absolute;
  top: 78%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.2rem;
  }
}
</style>
