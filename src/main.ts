/* eslint-disable @typescript-eslint/no-empty-function */
import { createApp } from "vue";
import App from "./App.vue";
import "virtual:windi.css";
import { createRouter, createWebHistory } from "vue-router";
import generatedRoutes from "virtual:generated-pages";
import { setupLayouts } from "virtual:generated-layouts";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import { registerSW } from "virtual:pwa-register";

// Locales
import messages from "@intlify/vite-plugin-vue-i18n/messages";
const i18n = createI18n({
  legacy: false,
  locale: "de",
  fallbackLocale: "en",
  messages,
});

// PWA
registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
});

// Router
const routes = setupLayouts(generatedRoutes);
const router = createRouter({
  history: createWebHistory(),
  routes,  
});

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(i18n);
app.mount("#app");
