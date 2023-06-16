

import { describe, it } from "vitest";
import { mount } from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue';

describe( 'Hello World', () => {
    it( 'should render', () => {
        const wrapper = mount(HelloWorld)
    })
})