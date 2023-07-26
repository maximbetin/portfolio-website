import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Update the import path to the Vue 3 router
import store from "./store"; // Update the import path to the Vue 3 store
import vuetify from "./plugins/vuetify"; // Update the import path to the Vue 3 vuetify plugin

const app = createApp(App);

// Specify the types explicitly in a multiline format
app
  .use(router as any)
  .use(store as any)
  .use(vuetify as any)
  .mount("#app");
