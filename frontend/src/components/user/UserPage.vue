<template>
  <div>
    <v-img
      src="https://avatars0.githubusercontent.com/u/23087350?s=400&v=4"
    ></v-img>
    <h1 v-if="$store.state.username">{{ $store.state.username }}</h1>

    <div v-if="$store.state.username && !loading">
      <ReposList />
    </div>
    <div>
      <div v-if="$store.state.username && !loading">
        <PullsList v-if="$store.getters.ready_to_show_pulls" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PullsList from "../PullsList";
import ReposList from "./ReposList";
export default {
  name: "User",
  components: {
    PullsList,
    ReposList,
  },
  data: () => ({
    loading: true,
  }),
  created() {
    this.loading = true;
    this.load_contracts();
  },
  methods: {
    ...mapActions(["fetch_contracts", "fetch_prs_by_author", "fetch_repos"]),
    async load_contracts() {
      await this.fetch_contracts();
      await this.fetch_repos();
      this.loading = false;
    },
  },
};
</script>

<style></style>
