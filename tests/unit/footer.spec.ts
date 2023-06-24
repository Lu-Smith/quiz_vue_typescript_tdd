import { shallowMount } from "@vue/test-utils";
import MainFooterVue from "@/components/MainFooter.vue";

describe('MainFooter', () => {
    it('render the footer with correct component and links', () => {
        const wrapper = shallowMount(MainFooterVue);

        const footerElement = wrapper.find('footer');
        expect(footerElement.exists()).toBe(true);

        expect(footerElement.text()).toContain('Coded by');

        const portfolioLink = footerElement.find('a[href="https://www.lunasmithart.com/"]');
        expect(portfolioLink.exists()).toBe(true);
        expect(portfolioLink.text()).toBe('Luna Smith');

        const gitHubLink = footerElement.find('a[href="https://github.com/Lu-Smith/quiz_vue_typescript_tdd" ]');
        expect(gitHubLink.exists()).toBe(true);
        expect(gitHubLink.text()).toBe('GitHub');
    })
}) 