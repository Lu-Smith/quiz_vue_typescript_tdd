import { shallowMount } from "@vue/test-utils";
import MainQuiz from "@/components/MainQuiz.vue";

describe('MainQuiz', () => {
    it('renders the component with correct content and functionality when quizCompleted = false', () => {
        const selectedSubject = 'Vue';
        const quizCompleted = false;
        const questionsArray = [{ question: 'Question 1', answer: 1, options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], selected: null }];
        const currentQuestion = 0;

        const wrapper = shallowMount(MainQuiz, {
            props: { selectedSubject, quizCompleted, questionsArray, currentQuestion},
        });

        expect(wrapper.find('p').exists()).toBe(true);

    })

})