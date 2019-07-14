<template>
  <div>
    <h1>{{file.name}}</h1>
    <p>{{file.content}}</p>
  </div>
</template>

<script>
export default {
  props: {
    file: {
      type: Object,
      default: {
        name: "",
        content: ""
      }
    }
  }
};
</script>

<style>
</style>
