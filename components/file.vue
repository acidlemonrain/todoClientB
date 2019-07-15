<template>
  <div style="width:100%;position:relative">
    <h1>{{file.name}}</h1>
    <div style="width:80%">
      <p v-html="file.content"></p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime illo quisquam excepturi.
    </div>
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
