<template>
  <div>
    <h1>Список контрактов</h1>
    <v-card
      class="repo"
      max-width="400"
      raised
      tile
      v-for="(repo, index) in $store.getters.repos"
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
  </div>
</template>
<script>
export default {
  name: "ContractsList",
  created() {
    console.log(this.$store.getters.repos);
  },
};
</script>

<style></style>
