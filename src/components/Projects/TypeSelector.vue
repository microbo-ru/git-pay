<template>
  <div>
    <v-select :items="items" v-model="selected"></v-select>
  </div>
</template>

<script>
export default {
  name: "TypeSelector",
  data() {
    return {
      items: ["all", "repositories", "pull requests"],
      selected: "all",
    };
  },
};
</script>

<style></style>
