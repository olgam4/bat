import { getByRole, render } from 'solid-testing-library'
import { it, describe, vi } from 'vitest'
import Counter from './index'
import { createCounter } from './reactivity'

describe('Counter', () => {
  describe('hooks', () => {
    it('can increment', ({ expect }) => {
      const hooks = createCounter()
      const first_value = hooks.counter()

      hooks.increment()

      const second_value = hooks.counter()
      const increment_value = second_value - first_value
      expect(increment_value).toBe(1)
    })
  })

  describe('Component', () => {
    it('is reactive', async ({ expect }) => {
      const cb = vi.fn()

      const { container } = render(() => <Counter counter={() => 0} increment={cb} />)
      getByRole(container, 'button')!.click()

      expect(cb).toHaveBeenCalledTimes(1)
    })
  })
})
