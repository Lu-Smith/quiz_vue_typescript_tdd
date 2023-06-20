<template>
  <h2>{{ selectedSubject }}</h2>
  <p v-if="quizCompleted">Welcome to ultimate {{ selectedSubject }} quiz</p>
  <p v-else>Your score is: </p>
</template>

<script lang="ts" setup>
import vueQuestions from '../../assets/VueQuestions.js'
import { ref, computed } from 'vue'

const quizCompleted = ref(false)
const selectedSubject = ref('Vue')

</script>

<style>

</style>