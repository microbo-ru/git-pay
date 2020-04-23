<template>
  <div>
    <h1>Список репозиториев</h1>
    <div v-for="(repo, index) in $store.getters.get_repos" :key="index">
      {{ repo.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ReposList",
};
</script>

<style></style>
