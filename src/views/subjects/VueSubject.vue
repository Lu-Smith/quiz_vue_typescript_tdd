<template>
  <h2>{{ selectedSubject }}</h2>
  <MainQuiz :selectedSubject="selectedSubject" :questionsArray="questionsArray"/>
</template>

<script lang="ts">
import vueQuestions from '../../assets/vueQuestions'
import { ref } from 'vue'
import MainQuiz from '../../components/MainQuiz.vue'

export default {
  components: {
    MainQuiz
  },
  data() {
    return {
      selectedSubject: ref('Vue'),
      questionsArray: vueQuestions
    }
  }
  }
</script>

