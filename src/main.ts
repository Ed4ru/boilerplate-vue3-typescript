import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import { i18n } from "@/services/i18n";
import { router } from "@/router";

import "@/assets/stylesheets/tailwind.scss";
import "@/services/fontAwesome";

const app = createApp(App).use(createPinia()).use(router).use(i18n);
router.isReady().then(() => app.mount("#app"));
