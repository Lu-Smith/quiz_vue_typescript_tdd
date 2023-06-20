<template>
  <h2>{{ selectedSubject }}</h2>
  <p v-if="!quizCompleted">{{ selectedSubject }} quiz</p>
  <p v-else>Your score: <strong>{{ finalScore }}%</strong></p>
  <div>{{ score }}/{{ numberOfQuestions }}</div>
  <div v-if="!quizCompleted" class="quiz">
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
const finalScore = ref(0)

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
    finalScore.value = ( score.value / numberOfQuestions.value)*100
  } 
  answeredQuestion.value = !answeredQuestion.value
}
</script>

<style>
.quiz {
  width: 600px;
  background: #2d4059; 
  padding: 10px 20px 30px 20px;
  margin: 50px auto;
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
}

.question {
  margin-top: 20px;
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

label {
  padding: 15px 20px;
  border-radius: 20px;
  transition: 200ms all ease-in-out;
  width: 100%;
  text-align: left;
}

label:hover {
  background: rgba(100, 100, 100, 0.5);
}

input{
  padding: 10px 20px;
  margin-right: 20px
}
.correct {
  background: rgb(26, 138, 63);
}

.wrong {
  border: 4px solid #ff5722;
}

.disabled {
  opacity: 0.5;
}

@media screen and (max-width: 700px) {
  .quiz {
  width: 500px;
  padding: 8px 18px 25px 18px;
  margin: 40px auto;
  border-radius: 15px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
}

.question {
  font-weight: 600;
}

.options {
  margin: 15px;
  gap: 8px;
}

label {
  padding: 10px 15px;
  border-radius: 15px;
}

input{
  padding: 8px 15px;
  margin-right: 18px
}

.wrong {
  border: 3px solid #ff5722;
}

}

</style>