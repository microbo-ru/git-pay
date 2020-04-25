<template>
  <div v-if="$store.getters.get_agreed.empl_username == $store.state.username">
    <div>{{$store.getter.get_agreed.user_username }}</div>
  </div>
</template>

<script>
export default {
  name: "Agreed"
};
</script>

<style>
</style>