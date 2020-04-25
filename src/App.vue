<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        <!--<router-link to="/"> <v-btn text x-large>GitPay </v-btn></router-link>-->
        <router-link to="/">
          <v-btn text x-large>
            <img src="@/assets/logo_gitpay_branch.png" height="40px" />
          </v-btn>
        </router-link>
      </v-toolbar-title>
      <v-container>
        <router-link to="Projects">
          <v-btn text>Projects</v-btn>
        </router-link>
        <router-link to="User">
          <v-btn text>LK</v-btn>
        </router-link>
      </v-container>

      <v-btn @click="showOverlay" outlined>
        <div v-if="!$store.state.username">login</div>
        <div v-if="$store.state.username">logout</div>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-overlay :value="overlay" :absolute="true">
        <v-btn icon @click="overlay = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <Login @show-overlay="showOverlay" />
      </v-overlay>

      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Login from "./components/Login/Login";

export default {
  name: "App",

  components: { Login },

  data: () => ({
    overlay: false
  }),
  created() {
    this.$store.dispatch("fetch_contracts");
    this.$store.dispatch("fetch_all_marked_pulls");
    this.$store.dispatch("fetch_users");
  },
  methods: {
    showOverlay() {
      if (!this.loginState) this.overlay = !this.overlay;
      else alert("dont");
    }
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  }
};
</script>

<style scoped>
a {
  color: black;
}
</style>
