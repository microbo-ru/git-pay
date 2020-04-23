<template>
  <div>
    <h1>Список пулл реквестов</h1>
    <v-list-item
      v-for="(pulls, index) in $store.getters.pulls_by_author('jqlee85')"
      :key="`${index}jqlee85`"
    >
      <v-list-item-content>
        <a :href="pulls.html_url">{{ pulls.title }}</a>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: "PullsList",
};
</script>

<style></style>
