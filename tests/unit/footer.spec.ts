import { shallowMount } from "@vue/test-utils";
import MainFooterVue from "@/components/MainFooter.vue";

describe('MainFooter', () => {
    it('render the footer with correct component and links', () => {
        const wrapper = shallowMount(MainFooterVue);

        const footerElement = wrapper.find('footer');
        expect(footerElement.exists()).toBe(true);

        expect(footerElement.text()).toContain('Coded by');
    })
}) 