<template>
  <MainQuiz :selectedSubject="selectedSubject" :questionsArray="questionsArray"/>
</template>

<script lang="ts" setup>
import vueQuestions from '../../assets/vueQuestions.js'
import { ref } from 'vue'
import MainQuiz from '../../components/MainQuiz.vue'

const selectedSubject = ref('Vue')
const questionsArray = vueQuestions

const components= {
    MainQuiz
  }
</script>

