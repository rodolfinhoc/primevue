import { NavigationGuard } from 'vue-router';

export const authGuard: NavigationGuard = (to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  if (isAuthenticated === 'true') {
    // O usuário está autenticado, permite o acesso à rota solicitada
    next();
  } else {
    // O usuário não está autenticado, redireciona para a tela de login
    next('/login');
  }
};
