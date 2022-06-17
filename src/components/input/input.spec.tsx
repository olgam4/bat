import Input from './index'

vi.mock('solid-app-router', () => ({
  Link: vi.fn(() => null),
}))

vi.mock('@solid-primitives/i18n', () => ({
  useI18n: () => ([
    vi.fn((key: string) => key),
  ]),
}))


describe('Input', () => {
  describe('Component', () => {
    test('should render the reactive value', async () => {
      const user = userEvent.setup()
      const { container } = renderTest(() => (
        <Input />
      ))
      
      const input = getByRole(container, 'textbox') as HTMLInputElement

      await user.type(input, 'Hello')

      expect(input.value).toBe('Hello')
    })
  })
})

