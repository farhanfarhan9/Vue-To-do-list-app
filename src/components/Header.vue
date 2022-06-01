<template>
  <header>
    <h1>{{title}}</h1>
    <Button text='Add Task' color='green' />
  </header>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import Button from './Button.vue';

export default{
  name: 'Header',
  props:{
    title: String,
  },
  components: {
    Button,
  }
}
// @Options({
//   props:{
//     title: String
//   },
//   components: {
//     Button
//   }
// })
// export default class Header extends Vue {}
</script>

<style scoped>
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
</style>