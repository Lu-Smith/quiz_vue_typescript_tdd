<template>
<h2>Random Question</h2>
<ul v-for="(question, index) in questionsArray" :key="index">
    <li>
        <strong>{{ question.question }}</strong>
        <span v-html="question.explanation.replace(/\n/g, '<br>')"></span>
    </li>
</ul>
</template>

<script lang="ts" setup>
import randomQuestions from '../../assets/randomQuestions.js'

const questionsArray = randomQuestions
</script>

<style scoped>
ul {
    width: 600px;
    margin: 0 auto;
    list-style: none;
}

li {
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    line-height: 25px;
}

li strong {
    color: #ff5722;
}
</style>