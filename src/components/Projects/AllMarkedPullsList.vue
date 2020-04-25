<template>
  <v-container>
    <v-row dense>
      <v-col v-for="(pull, index) in $store.state.all_marked_pulls" :key="index" cols="12">
        <v-card dark raised>
          <v-card-title class="headline">{{ pull.extra.title }}</v-card-title>

          <v-card-text>
            <v-row justify="space-between">
              <v-col>{{ pull.taskDescription }}</v-col>
              <v-col md="auto">{{pull.price}}</v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-btn text @click="changeSelected(pull)">Work on repo</v-btn>
            <v-spacer></v-spacer>
            <v-chip v-if="index%2 == 0" class="ma-2" color="teal" text-color="white" small>
              <v-avatar left small>
                <v-icon small>mdi-checkbox-marked-circle</v-icon>
              </v-avatar>Verified
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
  name: "AllMarkedPullsList",
  created() {},
  methods: {
    changeSelected(pull) {
      this.$store.dispatch("set_selected_pull", pull);
      this.$router.push("SelectedPull");
    }
  }
};
</script>

<style>
.container {
  width: 100%;
}
</style>
