<template>

  <div>

    <v-card v-slot:extension>
      <v-tabs align-with-title>
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab>Обзор</v-tab>
        <v-tab>Проекты</v-tab>
        <v-tab>Пулл реквесты</v-tab>
        <v-tab>Настройки</v-tab>
        <v-spacer></v-spacer>
        <v-tab>Последние действия</v-tab>
      </v-tabs>
    </v-card>


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
              <h3>Добавить новый pull request</h3>
              <NewRepo v-if="$store.getters.ready_to_show_pulls" />
            </v-col>
            <v-col md="9">
              <MarkedPullsList />
            </v-col>
          </v-row>
          <v-row>
            <Agreed />
          </v-row>
        </div>

        <div v-if="$store.state.username && $store.state.status=='user'" class="container">
          <MarkedPullsList />
        </div>
      </v-row>
    </v-container>
    <Payments />
  </div>
</template>

<script>
import NewRepo from "./NewRepo";
import MarkedPullsList from "./MarkedPullsList";
import Agreed from "./Agreed";
import Payments from "../Payments";

export default {
  name: "User",
  components: {
    NewRepo,
    MarkedPullsList,
    Agreed,
    Payments
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
