<template>
    <HelloWorld msg = "Welcome to Your Ultimate Training"/>
    <MainFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import MainFooter from './components/MainFooter.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    MainFooter
  }
});
</script>

