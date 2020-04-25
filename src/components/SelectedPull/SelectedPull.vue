<template>
  <div class="container">
    <v-row>
      <h2>Вы хотите выполнить этот pull request?</h2>
    </v-row>
    <v-row>
      <v-card dense raised width="100%">
        <v-card-title>{{$store.getters.get_selected_pull.extra.title}}</v-card-title>
        <v-card-text>
          <v-row justify="space-between">
            <v-col>{{$store.getters.get_selected_pull.taskDescription}}</v-col>
            <v-col md="auto">{{$store.getters.get_selected_pull.price}}</v-col>
            <v-col md="auto">{{$store.getters.get_selected_pull.empl_username}}</v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>
    <v-row>
      <v-btn @click="test">Да!</v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "SelectedPull",
  methods: {
    test() {
      this.$store.dispatch("set_agree", this.$store.getters.get_selected_pull);
      window.alert("Тогда начинайте работать!");
    }
  }
};
</script>

<style>
.container {
  width: 100%;
}
</style>