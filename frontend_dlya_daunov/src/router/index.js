import Vue from "vue";
import VueRouter from "vue-router";

import Welcome from "../components/Welcome/Welcome";
import UserPage from "../components/User/UserPage";
import Projects from "../components/Projects/Projects";
import Project from "../components/Project/Project";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/user",
    name: "User",
    component: UserPage,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/project",
    name: "Project",
    component: Project,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
