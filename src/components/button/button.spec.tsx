import Button from '.'

describe('Button', () => {
  test('should be clickable', () => {
    const cb = vi.fn()
    const { container } = renderTest(() => <Button onClick={cb} children={<span/>} />)

    getByRole(container, 'button')!.click()

    expect(cb).toHaveBeenCalledTimes(1)
    cb.mockReset()
  })
})
