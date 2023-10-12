import { describe, expect, test, vi } from 'vitest'
import { useRoute } from 'vue-router'
import { shallowMount } from '@vue/test-utils'
import Index from './index.vue'


vi.mock('vue-router', () => ({
  useRoute: () => ({
    params: { id: 1 },
  }),
}));

describe('test mocks', () => {
  test('test mocks', () => {

    const wrapper = shallowMount(Index, { global: { stubs: [ 'router-view' ] } })

    expect(wrapper.find("#param").text()).toBe('1')

  })
})
