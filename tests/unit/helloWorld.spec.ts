import { RouterLinkStub, shallowMount } from "@vue/test-utils";
import HelloWorldVue from "@/components/HelloWorld.vue";

describe('HelloWorld', () => {
    it('renders the component with correct content and functionality', () => {
        const wrapper = shallowMount(HelloWorldVue, {
            global: {
                provide: {
                    router: {
                        push: jest.fn()
                    }
                },
                stubs: {
                    RouterLink: RouterLinkStub
                }
            }
        })

        const navElement = wrapper.find('nav');
        expect(navElement.exists()).toBe(true);

        const selectElement = navElement.find('select');
        expect(selectElement.exists()).toBe(true);

        const optionElement = selectElement.find('option');
        expect(optionElement.exists()).toBe(true);
    })
})