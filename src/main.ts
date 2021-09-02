import { createApp } from "vue";
import App from "./App.vue";
import "virtual:windi.css";
import { createRouter, createWebHistory } from "vue-router";
import routes from "virtual:generated-pages";
import { createPinia } from "pinia";

const router = createRouter({
  history: createWebHistory(),
  routes,  
});

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.mount("#app");
