import Counter from './index'
import { createCounter } from './reactivity'

describe('Counter', () => {
  describe('hooks', () => {
    test('can increment', () => {
      const hooks = createCounter()

      hooks.increment()

      expect(hooks.counter()).toBe(1)
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
