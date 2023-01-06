import { it, describe, vi } from 'vitest'
import { getByRole, render } from 'solid-testing-library'
import Button from '.'

describe('Button', () => {
  it('should be clickable', ({ expect }) => {
    const cb = vi.fn()
    const { container } = render(() => <Button onClick={cb} children={<span/>} />)

    getByRole(container, 'button')!.click()

    expect(cb).toHaveBeenCalledTimes(1)
    cb.mockReset()
  })
})
