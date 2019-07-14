<template>
  <div>
    <span style="font-weight:bold" v-b-toggle="'collapse-'+node.id" class="m-1">{{node.name}} sadds</span>
    <b-collapse :id="'collapse-'+node.id">
      <div v-for="file in node.files" :key="file.id">{{file.name}}</div>
      <node v-for="child in  node.children" :key="child.id" :node="child" :dep="dep+1" />
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: "node",
  props: {
    node: Object,
    dep: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style>
</style>
