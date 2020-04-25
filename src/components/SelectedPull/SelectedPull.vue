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
      console.log(this.$store.state);
    }
  }
};
</script>

<style>
</style>