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
        name: "My",
        data() {
            return {
                activeTab: `Overview`,
                tabs: [
                    { id: 1, name: "Overview", route: `/my/overview` },
                    { id: 2, name: "Repos", route: `/my/repos` },
                    { id: 3, name: "Pulls", route: `/my/pulls` },
                    { id: 4, name: "Activity", route: `/my/activity` },
                    { id: 5, name: "Settings", route: `/my/settings` }
                ]
            };
        }
    }
</script>

<style scoped>

</style>