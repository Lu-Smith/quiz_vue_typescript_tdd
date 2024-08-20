<template>
    <nav>
      <router-link to="/">Home</router-link> |
      <select v-model="selectedSubject"  placeholder="Select your subject..." @change="navigateToSubject">
        <option disabled selected value="">Select your subject...</option>
        <option v-for="subject in subjects" :value="subject" :key="subject" >
          <span>{{ subject }}</span>
        </option> 
      </select>
  </nav>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
    <router-view/>
</template>

<script lang="ts">
import { ref, inject } from 'vue';
import { Router } from 'vue-router';

export default {
  name: 'HelloWorld',
  props: ['msg'],
  setup() {
    const selectedSubject = ref('');
    const subjects = ref(['Vue', 'Angular', 'TypeScript', 'React', 'JavaScript', 'C++', 'TDD', 'Random_Questions', 'Python'])
    const router = inject('router') as Router;
    const navigateToSubject = () => {
      if (selectedSubject.value) {
        router.push(`/${selectedSubject.value}`);
        selectedSubject.value = '';
      }
    };
    return {
      selectedSubject, subjects, navigateToSubject
    };
  }
}
</script>

<style scoped>

select {
  width: 300px;
  padding: 10px;
}

@media screen and (max-width: 700px) {
  select {
    width: 280px;
    padding: 8px;
  }
}

@media screen and (max-width: 480px) {
  select {
    width: 200px;
    padding: 5px;
  }
}
</style>