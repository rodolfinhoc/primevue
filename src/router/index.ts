import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import { authGuard } from "@/services/authentication/authGuard";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
    // Usa o guard para verificar se o usuário está autenticado
    beforeEnter: [authGuard],
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/login",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
