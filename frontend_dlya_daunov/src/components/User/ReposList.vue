<template>
  <v-container>
    <h1>Список репозиториев</h1>
    <v-card
      class="repo"
      max-width="400"
      raised
      tile
      v-for="(repo, index) in $store.getters.get_marked_repos"
      :key="index"
    >
      <v-card-title>{{ repo.name }}</v-card-title>
      <v-card-text>
        <v-row justify="space-between">
          <v-col>repo description</v-col>
          <v-col md="auto">repo price</v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ReposList",
};
</script>

<style></style>
