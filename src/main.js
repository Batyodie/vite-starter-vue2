import Vue from "vue";
import App from "@/App.vue";
import { createApp, h } from "vue-demi";
import "virtual:windi.css";
import "virtual:windi-devtools";
import router from "@/router";

Vue.config.productionTip = false;
Vue.config.devtools = true;

const app = createApp({
  router,
  render: () => h(App),
});

app.mount("#app");
