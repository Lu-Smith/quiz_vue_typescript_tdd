<template>
    <nav>
      <router-link to="/">Home</router-link> |
      <select v-model="selectedSubject"  placeholder="Select your subject...">
        <option disabled selected value="">Select your subject...</option>
        <option v-for="subject in subjects" :value="subject" :key="subject" >
          <router-link :to="`/${subject}`">{{ subject  }}</router-link>
        </option>
      </select>
  </nav>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <router-view/>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  name: 'HelloWorld',
  props: ['msg'],
  setup() {
    const selectedSubject = ref('');
    const subjects = ref(['Vue', 'Angular', 'TypeScript', 'React', 'JavaScript', 'C++', 'TDD'])

    return {
      selectedSubject, subjects
    };
  }
}
</script>

<style>

select {
width: 300px;
padding: 10px;
}
</style>
