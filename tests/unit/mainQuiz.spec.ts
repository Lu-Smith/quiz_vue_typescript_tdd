import { shallowMount, VueWrapper } from '@vue/test-utils';
import { defineComponent, ref, computed } from 'vue';

interface Question {
  question: string;
  answer: number;
  options: string[];
  selected: number | null;
  index?: number | undefined;
}

describe('MainQuiz', () => {
  const questionsArray: Question[] = [
    {
      question: 'What is the capital of France?',
      answer: 2,
      options: ['Berlin', 'London', 'Paris', 'Madrid'],
      selected: null,
      index: 0
    },
    {
      question: 'Which planet is closest to the Sun?',
      answer: 0,
      options: ['Mercury', 'Venus', 'Mars', 'Jupiter'],
      selected: null,
      index: 1
    }
  ];

  const selectedSubject = 'Geography';

  const mockComponent = defineComponent({
    props: ['questionsArray', 'selectedSubject'],
    template: `
    <p v-if="!quizCompleted" data-test="quiz-title">{{ selectedSubject }} quiz</p>
    <div v-else data-test="score-container">
      <p>Your score: <strong>{{ finalScore }}%</strong></p>
      <button v-if="finalScore !== 100" class="playAgain" @click="playAgain">Try again</button>
      <h3 v-else >Impressive! Your thinking reflects the mindset of a seasoned pro.</h3>
    </div>
    <div>{{ score }}/{{ numberOfQuestions }}</div>
    <div v-if="!quizCompleted" class="quiz"> 
      <div class="question"> {{ getCurrentQuestion.question }}</div>
      <div class="options">
        <label 
          v-for="(option, index) in getCurrentQuestion.options" 
          :key="index" 
          :class="{
            options: true,
            correct: getCurrentQuestion.selected === index && correctAnswer,
            wrong: getCurrentQuestion.selected === index && !correctAnswer,
            disabled: answeredQuestion
          }"
        >
          <input 
            type="radio" 
            :name="getCurrentQuestion.options[index]" 
            :value="index" 
            v-model="getCurrentQuestion.selected" 
            @change="setAnswer"
          >
          <span>{{ option }}</span>
        </label>
      </div>
      <button 
        @click="nextQuestion"
        :class="{ disabled: !answeredQuestion }"
      >
        {{ getCurrentQuestion.index === (numberOfQuestions - 1) ? 'Finish' : (getCurrentQuestion.selected == null ? 'Select Option' : 'Next Question') }}
      </button>
    </div>
  `,
    setup() {
      const quizCompleted = ref(false);
      const correctAnswer = ref(false);
      const answeredQuestion = ref(false);
      const numberOfQuestions = ref(questionsArray.length);
      const currentQuestion = ref(0);
      const score = ref(0);
      const finalScore = ref(0);

      const getCurrentQuestion = computed(() => {
        let question = questionsArray[currentQuestion.value];
        question.index = currentQuestion.value;
        return question;
      });

      const nextQuestion = () => {
        if (currentQuestion.value < questionsArray.length - 1) {
          currentQuestion.value++;
          correctAnswer.value = false;
        } else {
          quizCompleted.value = true;
        }
        answeredQuestion.value = !answeredQuestion.value;
      };

      const setAnswer = () => {
        if (getCurrentQuestion.value.selected === getCurrentQuestion.value.answer) {
          score.value++;
          correctAnswer.value = true;
          finalScore.value = Number(((score.value / numberOfQuestions.value) * 100).toFixed(1));
        }
        answeredQuestion.value = !answeredQuestion.value;
      };

      const playAgain = () => {
        questionsArray.forEach((q) => {
          q.selected = null;
        });
        quizCompleted.value = false;
        correctAnswer.value = false;
        answeredQuestion.value = false;
        currentQuestion.value = 0;
        score.value = 0;
        finalScore.value = 0;
      };

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
      };
    }
  });

  it('renders the component with correct content and functionality, when quizCompleted = false', () => {
    const wrapper = shallowMount(mockComponent, {
      props: { questionsArray: questionsArray, selectedSubject: selectedSubject }
    }) as VueWrapper<any>;

    expect(wrapper.find('[data-test="quiz-title"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="quiz-title"]').text()).toBe(selectedSubject + ' quiz');
    const scoreElement = wrapper.find('[data-test="score-container"]');
    expect(scoreElement.exists()).toBe(false);
    const quizElement = wrapper.find('div.quiz');
    expect(quizElement.exists()).toBe(true);

                const optionsElement = quizElement.find('div.options');
                expect(optionsElement.exists()).toBe(true);
                const labelElement = optionsElement.find('label');
                expect(labelElement.exists()).toBe(true);
                    const inputElement = labelElement.find('input');
                    expect(inputElement.exists()).toBe(true)
                    const spanElement = labelElement.find('span');
                    expect(spanElement.exists()).toBe(true);
                const buttonElement = quizElement.find('button');
                expect(buttonElement.exists()).toBe(true);

    })

    it('displays score container when quiz is completed', async () => {
        const wrapper = shallowMount(mockComponent, {
            props: { questionsArray: questionsArray, selectedSubject: selectedSubject }
          }) as VueWrapper<any>;

        for (let i = 0; i < questionsArray.length; i++) {
            const question = questionsArray[i];
            question.selected = question.answer;
            const buttonElement = wrapper.find('button');
            await buttonElement.trigger('click');
          }
        
        expect(wrapper.find('[data-test="quiz-title"]').exists()).toBe(false)
        const scoreElement = wrapper.find('[data-test="score-container"]');
        expect(scoreElement.exists()).toBe(true);
        const finalScore = scoreElement.find('p');
        expect(finalScore.exists()).toBe(true); 
        const finalButtonElement = scoreElement.find('button.playAgain');
        expect(finalButtonElement.exists()).toBe(true); 
        const messageElement = scoreElement.find('h3');
        expect(messageElement.exists()).toBe(false);
        const quizElement = wrapper.find('div.quiz');
        expect(quizElement.exists()).toBe(false);
      })

});




  