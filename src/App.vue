<template>
  <div>{{ $store.state.name }}</div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
const aaaa = 'this is test demo';
const asss = 33;
const asssasasasasasas = 32;
import { defineComponent } from 'vue';
const as = 3243;
console.log(323);
const a = 2020;
import HelloWorld from './components/HelloWorld.vue';
import { useStore } from 'vuex';
let asa: string;
asa = '32';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    console.log(21);
    let f = useStore('name');
    console.log(f);
  }
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
