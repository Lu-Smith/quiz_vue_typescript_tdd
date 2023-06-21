<template>
  <h2>{{ selectedSubject }}</h2>
  <MainQuiz :selectedSubject="selectedSubject" :questionsArray="questionsArray"/>
</template>

<script lang="ts">
import reactQuestions from '../../assets/reactQuestions.js'
import { ref } from 'vue'
import MainQuiz from '../../components/MainQuiz.vue'

export default {
  components: {
    MainQuiz
  },
  data() {
    return {
      selectedSubject: ref('React'),
      questionsArray: reactQuestions
    }
  }
  }
</script>