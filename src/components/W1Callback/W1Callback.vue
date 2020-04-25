<template>
    <div style="width: 100%; text-align: center">
        Активация завершена!
    </div>
</template>
<script>
export default {
  name: "W1Callback",
  methods: {},
   created() {
       console.log('... activated .. ');
       console.log(this.$route.query);
   }
}

</script>

<style></style>
