<template>
  <div>
    <div class="menu">
      <b-list-group>
        <node v-for="ele in root.children" :node="ele" :key="ele.name"></node>
      </b-list-group>
    </div>
    <div class="content">
      <NuxtChild :key="$route.params.id" />
    </div>
  </div>
</template>

<script>
import file from "~/components/file.vue";
import node from "~/components/node.vue";
export default {
  components: {
    node,
    file
  },
  data: () => {
    return {
      root: {
        name: "lsadkjl",
        children: []
      },
      file: {
        name: "",
        content: ""
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

<style scoped>
.menu {
  left: 0;
  position: fixed;
  height: calc(100vh - 104px);
  border: 1px solid #ccc;
  width: 150px;
}
.content {
  position: absolute;
  left: cal(100vw-150px);
}
</style>
