import { NavigationGuard } from "vue-router";

export const authGuard: NavigationGuard = (to, from, next) => {
  const isAuthenticated = Boolean(localStorage.getItem("loggedIn"));

  if (isAuthenticated) {
    // O usuário está autenticado, permite o acesso à rota solicitada
    next("/home");
  } else {
    // O usuário não está autenticado, redireciona para a tela de login
    next("/login");
  }
};

function validateStorage() {
  const isAuthenticated = Boolean(localStorage.getItem("loggedIn"));
  return Boolean(isAuthenticated !== null ? isAuthenticated : true);
}
