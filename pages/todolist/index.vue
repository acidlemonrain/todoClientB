<template>
  <div>
    <b-container>
      <ul style=" ">
        <li v-for="todo in todolist" :key="todo.id">
          name:{{todo.name}}
          type: {{todo.type}}
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      todolist: []
    };
  },
  created() {
    this.$axios.get("/todolist").then(res => {
      this.todolist = res.data;
    });
  }
};
</script>

<style>
</style>
