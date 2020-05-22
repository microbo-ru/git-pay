<template>

    <v-tabs v-model="activeTab" grow>
        <v-tab v-for="tab of tabs" :key="tab.id" :to="tab.route" exact>
            {{ tab.name }}
        </v-tab>

        <v-tab-item v-for="tab of tabs" :key="tab.id" :value="tab.route">
            <router-view></router-view>
        </v-tab-item>
    </v-tabs>

</template>

<script>
    export default {
        name: "Dashboard",
        data() {
            return {
                activeTab: `/overview`,
                tabs: [
                    { id: 1, name: "Overview", route: `/overview` },
                    { id: 1, name: "Repos", route: `/repos` },
                    { id: 1, name: "Pulls", route: `/pulls` },
                    { id: 1, name: "Activity", route: `/activity` },
                    { id: 1, name: "Settings", route: `/settings` },
                    /* { id: 2, name: "Project", route: `/user/${this.id}/project` }*/
                ]
            };
        }
    }
</script>

<style scoped>

</style>