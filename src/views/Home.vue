<template>
  <div v-show="showAddTask">
    <AddTask @add-task="addTask" />
  </div>

  <Tasks @delete-task="deleteTask" @toggle-reminder="toggleReminder" :tassks='tasks' />
</template>

<script lang='ts'>
import Tasks from '../components/Tasks.vue';
import AddTask from '../components/AddTask.vue';

export default{
  name:'Home',
  props:{
    showAddTask:Boolean,
  },
  components:{
    Tasks,
    AddTask
  },
  data(){
    return{
    tasks: [],
    }
  },
  methods: {
    async addTask(task: any){
      const res = await fetch('api/tasks',{
        method: 'POST',
        headers:{
          'Content-type': 'application/json'          
        },
        body: JSON.stringify(task)
      })
      const data = await res.json()
      this.tasks = [...this.tasks, data]
    },
    async deleteTask(id: any){
      if(confirm('Are you sure?')){
        const res = await fetch(`api/tasks/${id}`, {
          method: 'DELETE',
        })

        res.status === 200 ? (this.tasks = this.tasks.filter((task: any)=>task.id !== id)) : alert('Error deleting task')
        

      }
    },
    async toggleReminder(id: any){
      const taskToToggle = await this.fetchTask(id)
      const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

      const res = await fetch(`api/tasks/${id}`,{
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'          
        },
        body: JSON.stringify(updTask)
      })

      const data = await res.json()

      this.tasks = this.tasks.map((task: any)=>{
        if(task.id === id){
         return {...task, reminder: data.reminder}
        }else{
          return task
        }
        // task.id ===id ? {... task, reminder: !task.reminder}:task
      })
    },
    async fetchTasks(){
      const res = await fetch('api/tasks')
      const data = await res.json()
      return data
    },
    async fetchTask(id: any){
      const res = await fetch(`api/tasks/${id}`)
      const data = await res.json()
      return data
    }
  },
  async created(){
    this.tasks = await this.fetchTasks()
  }
}
</script>
