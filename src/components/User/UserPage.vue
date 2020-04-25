<template>
  <div>
    <v-container>
      <v-row>
        <v-col md="auto">
          <img
            v-if="$store.state.avatar_url"
            :src="$store.state.avatar_url"
            width="100px"
            height="100px"
            class="avatar"
          />
          <h1 v-if="$store.state.username">{{ $store.state.username }}</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div v-if="$store.state.username && $store.state.status=='empl'">
            <ReposList />
            <NewRepo v-if="$store.getters.ready_to_show_pulls" />
            <div v-for="(pull, index) in $store.state.marked_pulls" :key="index">{{pull.html_url}}</div>
          </div>
        </v-col>
        <v-col>
          <div>
            <div v-if="$store.state.username && $store.state.status=='user'">
              <PullsList v-if="$store.getters.ready_to_show_pulls" />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PullsList from "../PullsList";
import ReposList from "./ReposList";
import NewRepo from "./NewRepo";
export default {
  name: "User",
  components: {
    PullsList,
    ReposList,
    NewRepo
  },
  data: () => ({}),
  created() {},
  methods: {}
};
</script>

<style>
.avatar {
  border-radius: 15%;
}
</style>
