<template>
    <h2>{{ selectedSubject }}</h2>
    <MainQuiz :selectedSubject="selectedSubject" :questionsArray="questionsArray"/>
  </template>
  
  <script lang="ts">
  import pythonQuestions from '../../assets/pythonQuestions.js'
  import { ref } from 'vue'
  import MainQuiz from '../../components/MainQuiz.vue'
  
  export default {
    components: {
      MainQuiz
    },
    data() {
      return {
        selectedSubject: ref('Python'),
        questionsArray: pythonQuestions
      }
    }
    }
  </script>