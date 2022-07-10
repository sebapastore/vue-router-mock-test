import { describe, expect, test, vi } from 'vitest'
import { useRoute } from 'vue-router'
import { shallowMount } from '@vue/test-utils'
import Index from './index.vue'


vi.mock('vue-router', () => ({
  useRoute: vi.fn()
}))

describe('test mocks', () => {
  test('test mocks', () => {

    // @ts-ignore
    useRoute.mockImplementationOnce(() => ({
      params: {
        id: 1
      }
    }))

    shallowMount(Index)

    expect(useRoute).toBeCalledTimes(1);
  })
})