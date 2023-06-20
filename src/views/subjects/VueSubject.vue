<template>
  <h2>{{ selectedSubject }}</h2>
  <p v-if="!quizCompleted">Welcome to ultimate {{ selectedSubject }} quiz</p>
  <p v-else>Your score is: <strong>{{ finalScore }}%</strong></p>
  <div>{{ score }}/{{ numberOfQuestions }}</div>
  <div v-if="!quizCompleted">
    <div class="question"> {{ getCurrentQuestion.question }}</div>
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
          :value="index" 
          v-model="getCurrentQuestion.selected" 
          :disabled="getCurrentQuestion.selected !== null"
          @change="setAnswer">
        <span>{{ option }}</span>
      </label>
    </div>
    <button 
      @click="nextQuestion"
      :disabled="getCurrentQuestion.selected === null">
      {{ getCurrentQuestion.index === (vueQuestions.length - 1) ? 'Finish' :  'Next Question'}}
    </button>
  </div>
 
</template>

<script lang="ts" setup>
import vueQuestions from '../../assets/vueQuestions.js'
import { ref, computed } from 'vue'

const quizCompleted = ref(false)
const selectedSubject = ref('Vue')
const numberOfQuestions = ref(vueQuestions.length)
const currentQuestion = ref(0)
const score = ref(0)

const finalScore = ( score.value / numberOfQuestions.value)*100

const getCurrentQuestion = computed(() => {
  let question = vueQuestions[currentQuestion.value]
  question.index = currentQuestion.value
  return question
})

const nextQuestion = () => {
  if(currentQuestion.value < vueQuestions.length -1) {
    currentQuestion.value++
  } else {
    quizCompleted.value = true
  }
}
const setAnswer = () => {
  if (getCurrentQuestion.value.selected === getCurrentQuestion.value.answer) {
    score.value++
  }
}
 


</script>

<style>
.question {
  margin-top: 20px;
  color: rgb(173, 170, 170);
  font-weight: 700;
}
.options {
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
}
.correct {
  background: rgb(26, 138, 63);
}

.wrong {
  background: red;
}

.disabled {
  opacity: 0.5;
}

</style>