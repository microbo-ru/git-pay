<template>
  <div>
    <h1>Список контрактов</h1>
    <v-list-item v-for="(repo, index) in $store.getters.repos" :key="index">
      <v-list-item-content>
        <a :href="repo.url">{{ repo.name }}</a>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: "ReposList",
};
</script>

<style></style>
