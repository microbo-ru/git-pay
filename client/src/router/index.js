import Vue from "vue";
import VueRouter from "vue-router";

import Welcome from "../components/Welcome/Welcome";
import UserPage from "../components/User/UserPage";
import Projects from "../components/Projects/Projects";
import Project from "../components/Project/Project";
import SelectedPull from "../components/SelectedPull/SelectedPull";
import W1Callback from "../components/W1Callback/W1Callback";

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
  {
    path: "/selected_pull",
    name: "SelectedPull",
    component: SelectedPull,
  },
  {
    path: "/w1",
    name: "W1Callback",
    component: W1Callback,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
