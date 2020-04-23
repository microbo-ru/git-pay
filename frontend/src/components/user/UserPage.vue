<template>
  <div>
    <v-img
      src="https://avatars0.githubusercontent.com/u/23087350?s=400&v=4"
    ></v-img>
    <div>otzhora</div>

    <div>репы мои репы</div>
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
export default {
  name: "User",
  components: {
    PullsList,
  },
  data: () => ({
    loading: true,
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
  },
};
</script>

<style></style>
