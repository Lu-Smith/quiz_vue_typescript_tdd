import { shallowMount } from "@vue/test-utils";
import App from '../../src/App.vue';
import MainFooter from "@/components/MainFooter.vue";
import HelloWorld from "@/components/HelloWorld.vue";

describe('App', () => {
    it('renders HelloWorld and MainFooter components', ()=> {
        const wrapper = shallowMount(App);
        expect(wrapper.findComponent(HelloWorld).exists()).toBe(true);
        expect(wrapper.findComponent(MainFooter).exists()).toBe(true);
    })
})