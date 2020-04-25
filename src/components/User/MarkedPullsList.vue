<template>
  <div class="container">
    <h3>Список помеченных пуллов</h3>

    <v-card
      class="repo"
      raised
      tile
      v-for="(pull, index) in $store.getters.get_marked_pulls"
      :key="index"
    >
      <v-card-title>{{ pull.html_url }}</v-card-title>
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
  name: "MarkedPullsList"
};
</script>

<style scoped>
.container {
  width: 100%;
  padding: 0;
}
</style>