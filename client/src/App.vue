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
        <router-link to="projects"><v-btn text>Задания</v-btn></router-link>
        <router-link to="user"><v-btn text>Личный кабинет</v-btn></router-link>
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

      <div v-if="alert.message">
        <v-alert type="error">{{alert.message}}</v-alert>
      </div>

      <router-view></router-view>
    </v-content>

    <v-footer app>

    </v-footer>
  </v-app>
</template>

<script>

import Login from "./components/Login/Login";
import firebase from "firebase";
import { mapState, mapActions } from 'vuex';

export default {
  name: "App",
  components: { Login },

  data: () => ({
    overlay: false
  }),

  created() {
    this.$store.dispatch("common/fetch_contracts");
    this.$store.dispatch("common/fetch_all_marked_pulls");
    this.$store.dispatch("common/fetch_users");
  },

  methods: {
    showOverlay() {
      // if (!this.loginState) this.overlay = !this.overlay;
      // else alert("dont");
      var router = this.$router;
      var store = this.$store;

      var provider = new firebase.auth.GithubAuthProvider();

      provider.addScope('repo');

      firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log(result);
        store.dispatch("set_username", result.user.displayName);
        router.push("User");
        
      }).catch(function(error) {
        console.log(error);
      });
    },

    ...mapActions({
      clearAlert: 'alert/clear'
    })
  },

  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },

    ...mapState({
      alert: state => state.alert
    })
  },

  watch: {
    $route (){
      // clear alert on location change
      this.clearAlert();
    }
  }
};
</script>

<style scoped>
a {
  color: black;
}
</style>
