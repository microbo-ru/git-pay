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
  </div>
</template>

<script>
import AllMarkedPullsList from "./AllMarkedPullsList";
import TypeSelector from "./TypeSelector";

export default {
  name: "Projects",
  components: {
    AllMarkedPullsList,
    TypeSelector
  }
};
</script>

<style></style>
