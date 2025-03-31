import { createRouter, createWebHistory } from "vue-router";

// Import des pages
import HomeView from "@/views/HomeView.vue";
import QuizView from "@/views/QuizzView.vue";
import ResultView from "@/views/ResultView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import QuizBlindTest from "@/components/QuizBlindTest.vue";
<<<<<<< HEAD
import Timer from "@/components/Timer.vue";
=======
import Result from "@/components/Result.vue";
>>>>>>> 2f936c1f1449497087c8ece4353bd4ee4c775c61

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
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundView,
  },
<<<<<<< HEAD
  {
    path: "/timer",
    name: "Timer",
    component: Timer,
  },
=======
>>>>>>> 2f936c1f1449497087c8ece4353bd4ee4c775c61
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
