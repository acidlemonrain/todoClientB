<template>
  <div>
    <h1>{{file.name}}</h1>
    <p v-html="file.content"></p>
  </div>
</template>

<script>
export default {
  props: {
    file: {
      type: Object,
      default: {
        name: "defalt",
        content: "defalt"
      }
    }
  },
  computed: {
    file() {
      return this.$store.state.file;
    }
  }
};
</script>

<style>
</style>
