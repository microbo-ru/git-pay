<template>

    <v-container>
        <vue-markdown :source="content"></vue-markdown>
    </v-container>

</template>

<script>
    import VueMarkdown from 'vue-markdown';

    export default {
        name: "TermsPage",

        data: () => ({
            content: null,
        }),

        components: {
            VueMarkdown
        },

        created() {
            const requestOptions = {
                method: 'GET'
            };
            const file = "/terms.md";

            fetch(file, requestOptions)
                .then( (response) => {
                    return response.text().then( (text) => {
                        this.content = text;
                    });
                });
        }
    }
</script>

<style scoped>

</style>