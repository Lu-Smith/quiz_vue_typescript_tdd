import { shallowMount } from "@vue/test-utils";
import MainQuiz from "@/components/MainQuiz.vue";

describe('MainQuiz', () => {
    it('renders the component with correct content and functionality, when quizCompleted = false', () => {

        const questionsArray = [{ question: 'Question 1', answer: 1, options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], selected: null }];
        const currentQuestion = 0;
        const selectedSubject = 'Vue';

        const wrapper = shallowMount(MainQuiz, {
            props: {questionsArray, currentQuestion, selectedSubject, quizCompleted: false },
        });

            expect(wrapper.find('[data-test="quiz-title"]').exists()).toBe(true);
            expect(wrapper.find('[data-test="quiz-title"]').text()).toBe(selectedSubject + ' quiz');
            const scoreElement = wrapper.find('[data-test="score-container"]');
            expect(scoreElement.exists()).toBe(false);
            const quizElement = wrapper.find('div.quiz');
            expect(quizElement.exists()).toBe(true);

                const optionsElement = quizElement.find('div.options');
                expect(optionsElement.exists()).toBe(true);
                const labelElement = optionsElement.find('label');
                expect(labelElement.exists()).toBe(true)
                    const inputElement = labelElement.find('input');
                    expect(inputElement.exists()).toBe(true)
                    const spanElement = labelElement.find('span');
                    expect(spanElement.exists()).toBe(true);
                const buttonElement = quizElement.find('button');
                expect(buttonElement.exists()).toBe(true);

    })


    // it('renders the component with correct content and functionality, when quizCompleted = true', () => {
   
    //     const questionsArray = [{ question: 'Question 1', answer: 1, options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], selected: null }];
    //     const currentQuestion = 0;
  
  
    //         const wrapper = shallowMount(MainQuiz, {
    //             props: { questionsArray, currentQuestion, quizCompleted: true }

    //         });
    
    //             expect(wrapper.find('[data-test="quiz-title"]').exists()).toBe(false);
    //             const scoreElement = wrapper.find('[data-test="score-container"]');
    //             expect(scoreElement.exists()).toBe(true);
    //             const finalScore = scoreElement.find('p');
    //             expect(finalScore.exists()).toBe(true); 
    //             const finalButtonElement = scoreElement.find('button.playAgain');
    //             expect(finalButtonElement.exists()).toBe(true); 
    //             const messageElement = scoreElement.find('h3');
    //             expect(messageElement.exists()).toBe(true);
    
    //             const quizElement = wrapper.find('div.quiz');
    //             expect(quizElement.exists()).toBe(false);
        
    // })
})