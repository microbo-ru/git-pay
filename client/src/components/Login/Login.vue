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

import { mapActions } from 'vuex'

export default {
  name: "Login",
  data() {
    return {
      showPassword: false,
      username: "",
    };
  },
  methods: {
    ...mapActions( 'account', ['login']),

    register_button() {
      this.$emit("show-overlay");
    },

    select_username() {
      this.$emit("show-overlay");
      console.log("User entered: " + this.username);

      const username = this.username;
      //this.$store.dispatch("account/login", username);
      this.login( {username});

    },
  },
};
</script>
