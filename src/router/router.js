import { createRouter, createWebHistory } from "vue-router";

// Import des pages
import HomeView from "@/views/HomeView.vue";
import QuizView from "@/views/QuizzView.vue";
import ResultView from "@/views/ResultView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import QuizBlindTest from "@/components/QuizBlindTest.vue";
import Timer from "@/components/Timer.vue";
<<<<<<< HEAD
=======
import Answer from "@/components/Answer.vue";
import Result from "@/components/Result.vue";
>>>>>>> feature/Result

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
  {
    path: "/timer",
    name: "Timer",
    component: Timer,
  },
<<<<<<< HEAD
=======
  {
    path: "/answer",
    name: "Answer",
    component: Answer,
  },
  {
    path: "/result",
    name: "Result",
    component: Result,
  },
>>>>>>> feature/Result
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
