<template>
  <b-container style="margin-top:200px">
    <node v-for="ele in root.children" :node="ele" :key="ele.name"></node>
  </b-container>
</template>

<script>
import node from "~/components/node.vue";
export default {
  components: {
    node
  },
  data: () => {
    return {
      root: {
        name: "lsadkjl",
        children: []
      }
    };
  },

  created() {
    this.$axios
      .get("/tree/menu/" + this.$route.params.id)
      .then(res => {
        this.root.children = res.data;
      })
      .catch(e => alert(e));
  }
};
</script>

<style>
</style>
