<template>
  <div>
    <div>Sykf</div>
    <div>{{$store.getters.get_selected_pull}}</div>
    <v-btn @click="test">tik</v-btn>
  </div>
</template>

<script>
export default {
  name: "SelectedPull",
  methods: {
    test() {
      this.$store.dispatch("set_agree", this.$store.getters.get_selected_pull);
    }
  }
};
</script>

<style>
</style>