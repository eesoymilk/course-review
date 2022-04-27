import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ReviewDetailsView from "../views/ReviewDetailsView.vue";
import CreateView from "../views/CreateView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/:id",
      name: "ReviewDetails",
      component: ReviewDetailsView,
    },
    {
      path: "/create",
      name: "Create",
      component: CreateView,
    },
  ],
});

export default router;
