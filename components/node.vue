<template>
  <b-container>
    <p :style="{'font-size':`${(30-dep*3)}px`}">{{node.name}}</p>
    <p>
      <node v-for="child in  node.children" :key="child.id" :node="child" :dep="dep+1" />
    </p>
  </b-container>
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
