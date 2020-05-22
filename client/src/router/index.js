import Vue from "vue";
import VueRouter from "vue-router";

import Welcome from "../components/Welcome/Welcome";
import UserPage from "../components/User/UserPage";
import Projects from "../components/Projects/Projects";
import Project from "../components/Project/Project";
import SelectedPull from "../components/SelectedPull/SelectedPull";
import W1Callback from "../components/W1Callback/W1Callback";
import Login from "../components/Login/Login";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Welcome", component: Welcome },
  { path: "/user", name: "User",  component: UserPage },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/project", name: "Project", component: Project },
  { path: "/selected_pull", name: "SelectedPull", component: SelectedPull },
  { path: "/w1", name: "W1Callback", component: W1Callback },
  { path: "/login", name: "Login", component: Login }
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach( (to, from, next) => {
  // redirect to login page is user isn't authenticated
  const publicPages = ['/', '/w1', '/projects', '/my'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
});

export default router;
