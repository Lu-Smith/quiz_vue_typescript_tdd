<template>
  <h2>{{ selectedSubject }}</h2>
  <p v-if="!quizCompleted">Welcome to ultimate {{ selectedSubject }} quiz</p>
  <p v-else>Your score is: <strong>{{ finalScore }}%</strong></p>
  <div>{{ score }}/{{ numberOfQuestions }}</div>
  <div v-for="(question, index) in vueQuestions" :key="index">
    <p>{{ question.question }}</p>
  </div>
</template>

<script lang="ts" setup>
import vueQuestions from '../../assets/vueQuestions.js'
import { ref, computed } from 'vue'

const quizCompleted = ref(false)
const selectedSubject = ref('Vue')
const numberOfQuestions = ref(vueQuestions.length)
const currentQuestion = ref(0)
const score = computed(() => {
  let value = 0
  vueQuestions.map(q => {
    if (q.selected == q.answer) {
      value++
    }
  })
  return value
})
const finalScore =  score.value/numberOfQuestions.value*100


</script>

<style>

</style>