<template>
  <div>
    <v-select
      label="select your pull request"
      :items="$store.getters.get_pulls_titles"
      v-model="selected"
    ></v-select>
    <v-textarea v-model="taskDescription" label="describe your task" :auto-grow="true" :rows="1"></v-textarea>
    <v-text-field label="your price" v-model="price"></v-text-field>
    <v-btn @click="sendData">Publish</v-btn>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NewRepo",
  data() {
    return {
      selected: "",
      taskDescription: "",
      price: ""
    };
  },
  methods: {
    async sendData() {
      let pr = this.$store.getters.get_pulls_url_by_title(this.selected);

      let res = await axios.post(`${this.$store.state.server_url}/new_pull`, {
        html_url: pr["html_url"],
        taskDescription: this.taskDescription,
        price: this.price
      });
    }
  }
};
</script>

<style>
</style>