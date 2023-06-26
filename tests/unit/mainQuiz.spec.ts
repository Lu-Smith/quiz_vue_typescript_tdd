import { shallowMount } from "@vue/test-utils";
import MainQuiz from "@/components/MainQuiz.vue";

describe('MainQuiz', () => {
    const questionsArray = [
        {
          question: 'What is the capital of France?',
          answer: 2,
          options: ['Berlin', 'London', 'Paris', 'Madrid'],
          selected: null as number | null,
          index: 0
        },
        {
          question: 'Which planet is closest to the Sun?',
          answer: 0,
          options: ['Mercury', 'Venus', 'Mars', 'Jupiter'],
          selected: null as number | null,
          index: 1
        }
      ]
      
      const selectedSubject = 'Geography'

    it('renders the component with correct content and functionality, when quizCompleted = false', () => {
        const wrapper = shallowMount(MainQuiz, {
        props: { questionsArray, selectedSubject }
        })
    

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
        const wrapper = shallowMount(MainQuiz, {
          props: { questionsArray, selectedSubject }
        })
        
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
    })
