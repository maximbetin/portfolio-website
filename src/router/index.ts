import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/AboutView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../components/ContactView.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () =>
      import(
        /* webpackChunkName: "projects" */ "../components/ProjectsView.vue"
      ),
  },
  // Add more routes here as needed
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
