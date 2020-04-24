<template>
  <div>
    <v-container>
      <v-row>
        <v-col md="3">
          <div>Type</div>
          <div>Type selector</div>
        </v-col>
        <v-col md="5"> <ContractsList /></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ContractsList from "./ContractsList";
export default {
  name: "Projects",
  components: {
    ContractsList,
  },
};
</script>

<style></style>
