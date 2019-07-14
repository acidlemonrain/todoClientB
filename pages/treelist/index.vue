<template>
  <b-container>
    <ul>
      <li v-for="tree in treelist" :key="tree.id">
        name:{{tree.name}}
        catogory: {{tree.catogory}} --A click
        <b-link :to="'/tree/'+tree.id">todolist</b-link>
      </li>
    </ul>
  </b-container>
</template>

<script>
export default {
  data: () => {
    return {
      treelist: []
    };
  },
  created() {
    this.$axios
      .get("/tree/all")
      .then(res => {
        this.treelist = res.data;
      })
      .catch(e => alert(e));
  }
};
</script>

<style>
</style>
