import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar } from "quasar";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import TheHomeVue from "./views/TheHome.vue";
import TheUserVue from "./views/TheUser.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: TheHomeVue },
    { path: "/user", name: "User", component: TheUserVue },
  ],
});
createApp(App)
  .use(createPinia())
  .use(router)
  .use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })
  .mount("#app");
