<template>
  <v-container>
    <h1>Список пулл реквестов</h1>
    <v-list-item
      v-for="(pulls, index) in $store.getters.pulls_by_author(
        $store.state.username
      )"
      :key="`${index}jqlee85`"
    >
      <v-list-item-content>
        <a :href="pulls.html_url">{{ pulls.title }}</a>
      </v-list-item-content>
    </v-list-item>
  </v-container>
</template>

<script>
export default {
  name: "PullsList"
};
</script>

<style></style>
