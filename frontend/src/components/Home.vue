<template>
  <v-container>
    <div v-if="loading">loading contracts...</div>

    <div v-if="!loading">
      <h1>Список контрактов</h1>
      <v-list-item v-for="(repo, index) in $store.getters.repos" :key="index">
        <v-list-item-content>
          <a :href="repo.url">{{ repo.name }}</a>
        </v-list-item-content>
      </v-list-item>

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
    ...mapActions(["fetch_contracts", "fetch_prs_by_author"]),
    async load_contracts() {
      await this.fetch_contracts();
      await this.fetch_prs_by_author("jqlee85");
      this.loading = false;
    },
  },
};
</script>
