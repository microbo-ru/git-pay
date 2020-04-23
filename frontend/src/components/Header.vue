<template>
  <v-app-bar app color="indigo" dark>
    <v-toolbar-title>GitPay</v-toolbar-title>

    <v-btn @click="$emit('change-component', 'Projects')">Projects</v-btn>
    <v-btn @click="$emit('change-component', 'User')">LK</v-btn>

    <v-spacer></v-spacer>

    <div v-if="!$store.state.username">login</div>
    <div v-if="$store.state.username">logout</div>
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
    },
  },
};
</script>
