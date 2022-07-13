import Counter from './index'
import { createCounter } from './reactivity'

describe('Counter', () => {
  describe('hooks', () => {
    test('can increment', () => {
      const hooks = createCounter()
      const first_value = hooks.counter()

      hooks.increment()

      const second_value = hooks.counter()
      const increment_value = second_value - first_value
      expect(increment_value).toBe(1)
    })
  })

  describe('Component', () => {
    test('is reactive', async () => {
      const cb = vi.fn()

      const { container } = renderTest(() => <Counter counter={() => 0} increment={cb} />)
      getByRole(container, 'button')!.click()

      expect(cb).toHaveBeenCalledTimes(1)
    })
  })
})
