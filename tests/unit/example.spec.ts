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

  it('HelloWorld should have h1, button, expect', () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.find('h1')).toBeTruthy()
  })
})
