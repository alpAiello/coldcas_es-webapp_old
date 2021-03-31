import { createRouter, createWebHashHistory } from "vue-router";
import ProjectPortfolio from "@/views/ProjectPortfolio";
import Main from "@/views/Main";

const routes = [
  {
    path: "/project/:id",
    name: "ProjectPortfolio",
    component: ProjectPortfolio,
  },
  {
    path: "/",
    name: "Main",
    component: Main,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
