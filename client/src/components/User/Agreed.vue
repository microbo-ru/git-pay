<template>
  <div class="container">
    <div v-if="$store.getters.get_agreed.empl_username == $store.state.username">
      <div>Пользователь {{$store.getters.get_agreed.user_username }} выполнл {{$store.getters.get_agreed.pull.extra.title}}</div>
      <div>
        Вы заплатите ему?
        <Payments />
      </div>
    </div>
    <v-btn @click="showState">showstate</v-btn>
  </div>
</template>

<script>
import Payments from "../Payments";
export default {
  name: "Agreed",
  components: {
    Payments
  },
  methods: {
    showState() {
      console.log(this.$store.state);
    }
  }
};
</script>

<style>
.container {
  width: 100%;
}
</style>