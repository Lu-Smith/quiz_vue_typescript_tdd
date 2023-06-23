<template>
<h2>Random Question</h2>
<ul v-for="(question, index) in questionsArray" :key="index">
    <li>
        <strong>{{ question.question }}</strong>
        <span>{{ question.explanation }}</span>
    </li>
</ul>
</template>

<script lang="ts" setup>
import randomQuestions from '../../assets/randomQuestions.js'
import { ref } from 'vue';

const questionsArray = randomQuestions




</script>