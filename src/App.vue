<template>
  <HelloWorld msg = "Welcome to Your Ultimate Training"/>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{name:'Vue'}">Vue</router-link>
    <router-link :to="{name:'TDD'}">TDD</router-link>
  </nav>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
