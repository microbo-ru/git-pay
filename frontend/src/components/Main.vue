<template>
  <v-container width="100%" height="100%">
    <Header @show-overlay="showOverlay"></Header>
    <v-overlay :value="overlay" absolute="true">
      <v-btn icon @click="overlay = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <Login />
    </v-overlay>
  </v-container>
</template>

<script>
import Header from "./Header";
import Login from "./Login";
export default {
  name: "Main",
  components: {
    Header,
    Login
  },

  data: () => ({
    overlay: null
  }),
  methods: {
    showOverlay() {
      this.overlay = !this.overlay;
    }
  }
};
</script>
