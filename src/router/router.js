import { createRouter, createWebHistory } from "vue-router";

// Import des pages
import HomeView from "@/views/HomeView.vue";
import QuizView from "@/views/QuizzView.vue";
import ResultView from "@/views/ResultView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

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
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
