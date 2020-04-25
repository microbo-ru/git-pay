<template>
  <div>
    <div v-if="$store.getters.get_agreed.empl_username == $store.state.username">
      <div>{{$store.getter.get_agreed.user_username }}</div>
    </div>
    <v-btn @click="showState">showstate</v-btn>
  </div>
</template>

<script>
export default {
  name: "Agreed",
  methods: {
    showState() {
      console.log(this.$store.state);
    }
  }
};
</script>

<style>
</style>