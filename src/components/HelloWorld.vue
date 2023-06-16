<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <p>
    <select type="text" v-model="selectedSubject" placeholder="Select your subject..." >
      <option v-for="subject in subjects" :value="subject" :key="subject">{{ subject  }}</option>
    </select>
    <button>Submit</button>
  </p>
  <p>{{ selectedSubject  }}</p>
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
</style>
