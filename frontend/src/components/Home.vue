<template>
  <v-container>
    <div v-if="loading">loading contracts...</div>

    <div v-if="!loading">
      <h1>Список контрактов</h1>
      <v-item-list v-for="(repo, index) in $store.getters.repos" :key="index">
        <v-list-item-content>
          <a :href="repo.url">{{ repo.name }}</a>
        </v-list-item-content>
      </v-item-list>
    </div>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Home",

  data: () => ({ loading: true }),
  created() {
    this.loading = true;
    this.load_contracts();
  },
  methods: {
    ...mapActions(["fetch_contracts"]),
    async load_contracts() {
      await this.fetch_contracts();
      this.loading = false;
    },
  },
};
</script>
