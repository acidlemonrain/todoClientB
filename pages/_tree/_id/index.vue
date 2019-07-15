<template>
  <div>
    <div class="menu">
      <b-list-group>
        <node v-for="ele in root.children" :node="ele" :key="ele.name"></node>
      </b-list-group>
    </div>
    <div class="content">
      <file :file="file"></file>
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
      }
    };
  },
  computed: {
    fileid() {
      return this.$store.state.fileid;
    },
    file() {
      return this.$store.state.file;
    }
  },
  created() {
    this.$axios
      .get("/tree/menu/" + this.$route.params.id)
      .then(res => {
        this.root.children = res.data;
      })
      .catch(e => alert(e));
  },
  watch: {
    fileid(to) {
      this.$axios
        .get("/file/" + to)
        .then(res => {
          this.$store.commit("setfile", res.data);
        })
        .catch(e => alert(e));
    }
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
  left: 150px;
}
</style>
