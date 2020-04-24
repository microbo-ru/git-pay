<template>
  <v-container>
    <Header @change-component="changeComponent" @show-overlay="showOverlay"></Header>

    <v-overlay :value="overlay" :absolute="true">
      <v-btn icon @click="overlay = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <Login @show-overlay="showOverlay" />
    </v-overlay>

    <div v-if="activePage == 'Welcome'">
      <Welcome />
    </div>

    <div v-if="$store.state.username && activePage == 'User'">
      <User />
    </div>

    <div v-if="activePage == 'Repos'">
      <Repos />
    </div>

    <div v-if="activePage == 'Projects'">
      <Projects />
    </div>
  </v-container>
</template>

<script>
import Welcome from "./welcome/Welcome";
import User from "./user/UserPage";
import Projects from "./projects/Projects";
import Repos from "./repos/Repos";

import Header from "./Header";
import Login from "./Login";

export default {
  name: "Home",
  components: {
    Header,
    Login,
    Welcome,
    Projects,
    Repos,
    User
  },
  data: () => ({
    activePage: "Welcome",
    overlay: false
  }),

  methods: {
    showOverlay() {
      this.overlay = !this.overlay;
    },
    changeComponent(pageName) {
      this.activePage = pageName;
    }
  }
};
</script>
