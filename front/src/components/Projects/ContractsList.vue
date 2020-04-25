<template>
  <v-container>
    <v-row dense>
      <v-col v-for="(repo, index) in $store.getters.repos" :key="index" cols=12>
        <v-card dark raised>
          <v-card-title class="headline">{{ repo.name }}</v-card-title>
          <v-card-subtitle>{{ repo.description }}</v-card-subtitle>
          <v-card-text>
            <v-row justify="space-between">
              <v-col>repo description</v-col>
              <v-col md="auto">repo price</v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-btn text>Work on repo</v-btn>
            <v-spacer></v-spacer>
            <v-chip
                    v-if="index%2 == 0"
                    class="ma-2"
                    color="teal"
                    text-color="white"
                    small
            >
              <v-avatar left small>
                <v-icon small>mdi-checkbox-marked-circle</v-icon>
              </v-avatar>
              Verified
            </v-chip>
            <v-chip
                    v-if="index%3 == 0"
                    class="ma-2"
                    color="orange"
                    text-color="white"
                    outlined
                    small
            >
              Premium
              <v-icon right small>mdi-star</v-icon>
            </v-chip>
          </v-card-actions>
        </v-card>

      </v-col>

    </v-row>

  </v-container>

</template>

<script>
export default {
  name: "ContractsList",
  created() {},
};
</script>

<style>
.container {
  width: 100%;
}
</style>
