<template>
  <v-container>
    <Header @show-overlay="showOverlay"></Header>

    <v-overlay :value="overlay" :absolute="true">
      <v-btn icon @click="overlay = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <Login />
    </v-overlay>

    <div v-if="!$store.state.username">loading contracts...</div>

    <div v-if="$store.state.username && !loading">
      <PullsList v-if="$store.getters.ready_to_show_pulls" />
      <ReposList />
    </div>
  </v-container>
</template>

<script>
import PullsList from "./PullsList";
import ReposList from "./ReposList";
import Header from "./Header";
import Login from "./Login";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    PullsList,
    ReposList,
    Header,
    Login,
  },
  data: () => ({
    loading: true,
    overlay: null,
  }),
  created() {
    this.loading = true;
    this.load_contracts();
  },
  methods: {
    ...mapActions(["fetch_contracts", "fetch_prs_by_author"]),
    async load_contracts() {
      await this.fetch_contracts();
      this.loading = false;
    },
    showOverlay() {
      this.overlay = !this.overlay;
    },
  },
};
</script>
