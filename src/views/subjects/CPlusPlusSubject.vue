<template>
  <h2>{{ selectedSubject }}</h2>
  <MainQuiz :selectedSubject="selectedSubject" :questionsArray="questionsArray"/>
</template>

<script lang="ts">
import cPlusPlusQuestions from '../../assets/cPlusPlusQuestions.js'
import { ref } from 'vue'
import MainQuiz from '../../components/MainQuiz.vue'

export default {
  components: {
    MainQuiz
  },
  data() {
    return {
      selectedSubject: ref('C++'),
      questionsArray: cPlusPlusQuestions
    }
  }
  }
</script>