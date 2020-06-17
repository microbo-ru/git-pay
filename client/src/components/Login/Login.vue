<template>
  <v-card width="400" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Username"
          prepend-icon="mdi-account-circle"
          v-model="username"
        />
        <v-text-field
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="success" @click="register_button">Register</v-btn>
      <v-spacer></v-spacer>

      <v-btn color="info" @click="select_username">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      showPassword: false,
      username: "",
    };
  },
  methods: {
    register_button() {
      this.$emit("show-overlay");
    },
    select_username() {
      this.$emit("show-overlay");
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
  },
};
</script>
