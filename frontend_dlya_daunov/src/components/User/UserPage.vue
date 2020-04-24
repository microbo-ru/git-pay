<template>
  <div>
    <v-row>
      <v-col md="auto">
        <v-img
          v-if="$store.state.avatar_url"
          :src="$store.state.avatar_url"
          width="100px"
          height="100px"
        ></v-img>
        <h1 v-if="$store.state.username">{{ $store.state.username }}</h1>
      </v-col>
      <v-col>Какая-то стика</v-col>
    </v-row>
    <v-row>
      <v-col>
        <div v-if="$store.state.username">
          <ReposList />
        </div>
      </v-col>
      <v-col>
        <div>
          <div v-if="$store.state.username">
            <PullsList v-if="$store.getters.ready_to_show_pulls" />
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PullsList from "../PullsList";
import ReposList from "./ReposList";
export default {
  name: "User",
  components: {
    PullsList,
    ReposList,
  },
  data: () => ({}),
  created() {},
  methods: {},
};
</script>

<style></style>
