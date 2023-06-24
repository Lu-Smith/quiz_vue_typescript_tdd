import { RouterLinkStub, shallowMount } from "@vue/test-utils";
import HelloWorldVue from "@/components/HelloWorld.vue";

describe('HelloWorld', () => {
    it('renders the component with correct content and functionality', () => {
        const msg = 'Welcome to Your Ultimate Training';
        const wrapper = shallowMount(HelloWorldVue, {
            props: {
                msg: msg // Pass the prop value
              },
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

        const routerLinkElement = wrapper.findComponent(RouterLinkStub);
        expect(routerLinkElement.exists()).toBe(true);
        expect(routerLinkElement.props().to).toBe('/');

        const titleContainer = wrapper.find('div');
        expect(titleContainer.exists()).toBe(true);

        const titleElement = titleContainer.find('h1');
        expect(titleElement.exists()).toBe(true);
        expect(titleElement.text()).toBe(msg);
    })
})