<template>
  <v-app-bar app color="indigo" dark>
    <v-toolbar-title>Application</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-icon size="x-large" @click="showOverlay">mdi-account-box</v-icon>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data: () => ({}),
  methods: {
    showOverlay() {
      this.$emit("show-overlay");
    }
  }
};
</script>