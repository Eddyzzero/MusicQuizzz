import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/quiz/:id",
    name: "quiz",
    component: () => import("../views/QuizzView.vue"),
  },
  {
    path: "/results",
    name: "results",
    component: () => import("../views/ResultView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
