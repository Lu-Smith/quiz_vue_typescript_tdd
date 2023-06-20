<template>
  <h2>{{ selectedSubject }}</h2>
  <p v-if="!quizCompleted">Welcome to ultimate {{ selectedSubject }} quiz</p>
  <p v-else>Your score is: <strong>{{ finalScore }}%</strong></p>
  <div>{{ score }}/{{ numberOfQuestions }}</div>
  <div>
    <div> {{ getCurrentQuestion.question }}</div>
    <div class="options">
      <label 
        v-for="(option, index) in getCurrentQuestion.options" 
        :key="index" 
        :class="`option ${
          getCurrentQuestion.selected == index ? (index == getCurrentQuestion.answer ? 'correct' : 'wrong') : ''
        } ${
          getCurrentQuestion.selected != null && index != getCurrentQuestion.selected ? 'disabled' : ''
        }`">
        <input 
        type="radio" 
        :name="getCurrentQuestion.question" 
        :value="index" v-model="getCurrentQuestion.selected" 
        :disabled="Boolean(getCurrentQuestion.selected)" 
        :change="setAnswer">
        <span>{{ option }}</span>
      </label>
    </div>
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

const getCurrentQuestion = computed(() => {
  let question = vueQuestions[currentQuestion.value]
  return question
})

const nextQuestion = () => {
  if(currentQuestion.value < vueQuestions.length -1) {
    currentQuestion.value++
  } else {
    quizCompleted.value = true
  }
}
const setAnswer = (e: Event) => {
  vueQuestions[currentQuestion.value].selected = (e.target as HTMLInputElement).value !== ""
    ? Number((e.target as HTMLInputElement).value)
    : null;
};
 


</script>

<style>

</style>