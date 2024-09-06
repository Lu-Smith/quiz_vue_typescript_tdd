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
    <h3>Today is {{date}}☀️</h3>
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
    const year = ref(new Date().getFullYear());
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const month = ref(months[new Date().getMonth()]);
    const day = ref(new Date().getDate());
    const date = ref("");
    if ( day.value === 1 || day.value === 1) {
      date.value = `${day.value}st of ${month.value}, ${year.value}`;
    } else if ( day.value === 2 ) {
      date.value = `${day.value}nd of ${month.value}, ${year.value}`;
    } else if ( day.value === 3) {
      date.value = `${day.value}rd of ${month.value}, ${year.value}`;
    } else {
      date.value = `${day.value}th of ${month.value}, ${year.value}`
    }

    return {
      selectedSubject, subjects, navigateToSubject, date
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