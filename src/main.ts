import './registerServiceWorker';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/lara-light-teal/theme.css';

import Button from 'primevue/button';
import Card from 'primevue/card';
import PrimeVue from 'primevue/config';
import Divider from 'primevue/divider';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Sidebar from 'primevue/sidebar';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(PrimeVue, { ripple: true });
app.component('Button', Button);
app.component('InputText', InputText);
app.component('Card', Card);
app.component('Password', Password);
app.component('Toast', Toast);
app.component('Sidebar', Sidebar);
app.component('Divider', Divider);
app.use(ToastService);
app.mount('#app');