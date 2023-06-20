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
        :class="`options, ${getCurrentQuestion.selected === index && correctAnswer ? 'correct' : ''}
        ${answeredQuestion ? 'disabled' : ''}`">
        <input 
          type="radio" 
          :name="getCurrentQuestion.options[index]" 
          :value="index" 
          v-model="getCurrentQuestion.selected" 
          @change="setAnswer">
        <span>{{ option }}</span>
      </label>
    </div>
    <button 
      @click="nextQuestion"
      :class="!answeredQuestion ? 'disabled' : ''">
      {{ getCurrentQuestion.index === (vueQuestions.length - 1) ? 'Finish' : (getCurrentQuestion.selected == null ? 'Select Option' : 'Next Question')}}
    </button>
  </div>
 
</template>

<script lang="ts" setup>
import vueQuestions from '../../assets/vueQuestions.js'
import { ref, computed } from 'vue'

const quizCompleted = ref(false)
const correctAnswer = ref(false)
const answeredQuestion = ref(false)
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
    correctAnswer.value = false
  } else {
    quizCompleted.value = true
  }
  answeredQuestion.value = !answeredQuestion.value
}
const setAnswer = () => {
  if (getCurrentQuestion.value.selected === getCurrentQuestion.value.answer) {
    score.value++
    correctAnswer.value = true
  } 
  answeredQuestion.value = !answeredQuestion.value
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