import Vue from "vue";
import VueRouter from "vue-router";

import Welcome from "../components/Welcome/Welcome";
import UserPage from "../components/User/UserPage";
import Projects from "../components/Projects/Projects";
import Project from "../components/Project/Project";
import SelectedPull from "../components/SelectedPull/SelectedPull";
import W1Callback from "../components/W1Callback/W1Callback";
import Login from "../components/Login/Login";
import My from "../components/My/My";
import OverviewTab from "../components/My/OverviewTab";
import ReposTab from "../components/My/ReposTab";
import PullsTab from "../components/My/PullsTab";
import ActivityTab from "../components/My/ActivityTab";
import SettingsTab from "../components/My/SettingsTab";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Welcome", component: Welcome },
  { path: "/user", name: "User",  component: UserPage },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/project", name: "Project", component: Project },
  { path: "/selected_pull", name: "SelectedPull", component: SelectedPull },
  { path: "/w1", name: "W1Callback", component: W1Callback },
  { path: "/login", name: "Login", component: Login },
  { path: "/my", name: "My", component: My,
    children: [
      //{ path: "", component: OverviewTab },
      { path: "", component: OverviewTab },
      { path: "overview", name: "my-overview", component: OverviewTab },
      { path: "repos", name: "my-repos", component: ReposTab },
      { path: "pulls", name: "my-pulls", component: PullsTab },
      { path: "activity",  name: "my-activity", component: ActivityTab },
      { path: "settings", name: "my-settings", component: SettingsTab }
    ]
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

router.beforeEach( (to, from, next) => {
  // redirect to login page is user isn't authenticated
  const publicPages = ['/', '/w1', '/projects']
      .map(v => v.toLowerCase());
  const authRequired = !publicPages.includes(to.path.toLowerCase());
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
});

export default router;
