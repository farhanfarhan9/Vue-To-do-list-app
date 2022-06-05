<template>
  <div :key="task.id" v-for="task in tassks">
    <Task @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)" :task='task'/>
  </div>
</template>

<script>
import Task from "./Task.vue";
export default {
  name: 'Tasks',
  props:{
    tassks: Array
  },
  components:{
    Task
  },
  emits:['delete-task', 'toggle-reminder']
}
</script>