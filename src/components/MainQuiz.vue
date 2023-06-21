<template>
    <p v-if="!quizCompleted">{{ selectedSubject }} quiz</p>
    <div v-else>
      <p>Your score: <strong>{{ finalScore }}%</strong></p>
      <button class="playAgain" @click="playAgain">Play again</button>
    </div>
    <div>{{ score }}/{{ numberOfQuestions }}</div>
    <div v-if="!quizCompleted" class="quiz">
      <div class="question"> {{ getCurrentQuestion.question }}</div>
      <div class="options">
        <label 
          v-for="(option, index) in getCurrentQuestion.options" 
          :key="index" 
          :class="`options, ${getCurrentQuestion.selected === index && correctAnswer ? 'correct' : ''}  ${getCurrentQuestion.selected === index && !correctAnswer ? 'wrong' : ''}
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
        {{ getCurrentQuestion.index === (numberOfQuestions - 1) ? 'Finish' : (getCurrentQuestion.selected == null ? 'Select Option' : 'Next Question')}}
      </button>
    </div>
  </template>

<script lang="ts">
import { ref, computed } from 'vue'

export default {
  props: ['questionsArray', 'selectedSubject'],
  setup(props: { 
    questionsArray: {
        question: string;
        answer: number;
        options: string[];
        selected: number | null;
        index?: number | undefined;
    }[], 
    selectedSubject: string}) {

const quizCompleted = ref(false)
const correctAnswer = ref(false)
const answeredQuestion = ref(false)
const numberOfQuestions = ref(props.questionsArray.length)
const currentQuestion = ref(0)
const score = ref(0)
const finalScore = ref(0)


const getCurrentQuestion = computed(() => {
  let question = props.questionsArray[currentQuestion.value]
  question.index = currentQuestion.value
  return question
})

const nextQuestion = () => {
  if(currentQuestion.value < props.questionsArray.length -1) {
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

const playAgain = () => {
  props.questionsArray.forEach((q) => {
    q.selected = null;
  });
  quizCompleted.value = false
  correctAnswer.value = false
  answeredQuestion.value = false
  currentQuestion.value = 0
  score.value = 0
  finalScore.value = 0
}

return {
      quizCompleted,
      correctAnswer,
      answeredQuestion,
      numberOfQuestions,
      currentQuestion,
      score,
      finalScore,
      playAgain,
      setAnswer,
      nextQuestion,
      getCurrentQuestion
    }
}
}
</script>