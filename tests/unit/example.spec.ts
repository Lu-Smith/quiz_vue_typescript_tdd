import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })

  it('HelloWorld should have h1, select with options, button, and p', () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.find('h1').exists()).toBeTruthy();
    expect(wrapper.find('select').exists()).toBeTruthy();

    const selectOptions = wrapper.findAll('select option');
    expect(selectOptions.length).toBe(wrapper.vm.subjects.length);

    wrapper.vm.subjects.forEach((subject:string, index:number) => {
      expect(selectOptions[index].text()).toBe(subject);
    });

    expect(wrapper.find('button').exists()).toBeTruthy();
    expect(wrapper.find('button').text()).toBe('Submit');
    expect(wrapper.find('p').exists()).toBeTruthy();
  })
})
