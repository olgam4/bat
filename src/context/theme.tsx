import type { FlowComponent } from 'solid-js'

type Theme = 'light' | 'dark'

export const ThemeContext = createContext([
  {
    name: 'light'
  }, {
    setTheme: (_theme: Theme) => { },
    toggleTheme: () => { }
  }
])

interface Props {
  theme?: string;
}

export const ThemeProvider: FlowComponent<Props> = (props) => {
  const [state, setState] = createStore({
    name: props.theme || 'dark',
  })

  const theme = [
    state,
    {
      setTheme: (theme: string) => {
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
      <div class={theme[0].name}>
        {props.children}
      </div>
    </ThemeContext.Provider>
  )
}
