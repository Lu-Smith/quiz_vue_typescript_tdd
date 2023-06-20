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

  it('HelloWorld should have h1, select with options', () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.find('h1').exists()).toBeTruthy();
    expect(wrapper.find('select').exists()).toBeTruthy();

    const selectOptions = wrapper.findAll('select option');
    expect(selectOptions.length).toBe(wrapper.vm.subjects.length + 1);
    wrapper.vm.subjects.forEach((subject:string, index:number) => {
      expect(selectOptions[index + 1].text()).toBe(subject);
    });
    

  })

  it('It shoul redirect to a selected subject or home page', () => {
    const selectedSubject = 'Vue';
    const routerMock = {
      push: jest.fn(),
    };

    const wrapper = shallowMount(HelloWorld, {
      global: {
        provide: {
          router: routerMock,
        },
      },
    });

    wrapper.find('select').setValue(selectedSubject);
    expect(routerMock.push).toHaveBeenCalledWith(`/${selectedSubject}`);
  })
})
