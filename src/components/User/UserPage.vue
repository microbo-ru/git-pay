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
        <div v-if="$store.state.username && $store.state.status=='empl'" class="container">
          <v-row>
            <v-col md="3">
              <h3>Добавить новый пул</h3>
              <NewRepo v-if="$store.getters.ready_to_show_pulls" />
            </v-col>
            <v-col md="9">
              <MarkedPullsList />
            </v-col>
          </v-row>
        </div>

        <div v-if="$store.state.username && $store.state.status=='user'">
          <PullsList v-if="$store.getters.ready_to_show_pulls" />
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PullsList from "../PullsList";
import NewRepo from "./NewRepo";
import MarkedPullsList from "./MarkedPullsList";

export default {
  name: "User",
  components: {
    PullsList,
    NewRepo,
    MarkedPullsList
  },
  data: () => ({}),
  created() {},
  methods: {}
};
</script>

<style scoped>
.avatar {
  border-radius: 15%;
}

.container {
  width: 100%;
}
</style>
