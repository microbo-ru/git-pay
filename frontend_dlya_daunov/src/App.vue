<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title
        ><router-link to="/" tag="a">GitPay</router-link>
      </v-toolbar-title>
      <v-container>
        <router-link to="Projects"><v-btn>Projects </v-btn></router-link>
        <router-link to="User"><v-btn>LK</v-btn></router-link>
      </v-container>

      <v-btn @click="showOverlay">
        <div v-if="!$store.state.username">login</div>
        <div v-if="$store.state.username">logout</div>
        <v-icon size="x-large">mdi-account-box</v-icon>
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
    overlay: false,
  }),
  created() {
    this.$store.dispatch("fetch_contracts");
  },
  methods: {
    showOverlay() {
      if (!this.loginState) this.overlay = !this.overlay;
      else alert("dont");
    },
  },
};
</script>

<style scoped>
a {
  color: black;
}
</style>
