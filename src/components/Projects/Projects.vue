<template>
  <div>
    <v-container>
      <v-row>
        <v-col md="8">
          <h1>Список контрактов</h1>
        </v-col>
        <v-col>
          <TypeSelector />
        </v-col>
      </v-row>

      <v-row>
        <AllMarkedPullsList />
      </v-row>
    </v-container>
    <Payments />
  </div>
</template>

<script>
import AllMarkedPullsList from "./AllMarkedPullsList";
import TypeSelector from "./TypeSelector";
import Payments from "../Payments";

export default {
  name: "Projects",
  components: {
    AllMarkedPullsList,
    TypeSelector,
    Payments
  }
};
</script>

<style></style>
