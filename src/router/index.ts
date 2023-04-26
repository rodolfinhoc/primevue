import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    // Usa o guard para verificar se o usuário está autenticado
    beforeEnter: (to, from, next) => {
      const loggedIn = localStorage.getItem("loggedIn");
      if (!loggedIn) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
