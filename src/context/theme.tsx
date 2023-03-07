import type { FlowComponent } from 'solid-js'

type Theme = 'light' | 'dark'

type State = { name: Theme }

type ThemeContextType = [
  State,
  { setTheme: (t: Theme) => void, toggleTheme: () => void }
]

export const ThemeContext = createContext([
  {
    name: 'light'
  }, {
    setTheme: (_theme: Theme) => { },
    toggleTheme: () => { }
  }
])

interface Props {
  theme?: Theme;
}

export const ThemeProvider: FlowComponent<Props> = (props) => {
  const [state, setState] = createStore<State>({
    name: props.theme || 'dark',
  })

  const theme: ThemeContextType = [
    state,
    {
      setTheme: (theme: Theme) => {
        setState({
          name: theme,
        })
      },
      toggleTheme: () => {
        setState({
          name: state.name === 'dark' ? 'light' : 'dark',
        })
      }
    }
  ]

  return (
    <ThemeContext.Provider value={theme}>
      <div class={`${theme[0].name}`}>
        {props.children}
      </div>
    </ThemeContext.Provider>
  )
}
