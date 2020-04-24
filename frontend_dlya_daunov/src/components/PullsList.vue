<template>
  <v-container>
    <h1>Список пулл реквестов</h1>

    <v-card
      class="repo"
      max-width="800"
      raised
      tile
      v-for="(pulls, index) in $store.getters.pulls_by_author(
        $store.state.username
      )"
      :key="`${index}jqlee85`"
    >
      <v-card-title>
        <a :href="pulls.html_url">{{ pulls.title }}</a>
      </v-card-title>
      <v-card-text>
        <v-row justify="space-between">
          <v-col>pull request description</v-col>
          <v-col md="auto">money granted?</v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "PullsList"
};
</script>

<style></style>
