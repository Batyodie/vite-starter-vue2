import Vue from "vue";
import VueRouter from "vue-router";

import generatedRoutes from "virtual:generated-pages";
import { setupLayouts } from "virtual:generated-layouts";

Vue.use(VueRouter);

export const routes = setupLayouts(generatedRoutes);

console.log(routes);

const router = new VueRouter({
  routes,
});

export default router;
