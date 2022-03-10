import BasicUse from '../example/BasicUse.vue'
import { mount } from '@vue/test-utils'

test('test button basic use', () => {
  const wrapper = mount(BasicUse)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})
