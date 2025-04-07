import { createRouter, createWebHistory } from "vue-router";

// Import des pages
import HomeView from "@/views/HomeView.vue";
import QuizView from "@/views/QuizzView.vue";
import ResultView from "@/views/ResultView.vue";
import QuizBlindTest from "@/components/QuizBlindTest.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/quizz/:id",
    name: "Quizz",
    component: QuizView,
    props: true,
  },
  {
    path: "/result",
    name: "Result",
    component: ResultView,
  },
  {
    path: "/blind-test/:id",
    name: "BlindTest",
    component: QuizBlindTest,
    props: true,
  },
];

// Créer une instance de router
// et la configurer avec l'historique de navigation
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
