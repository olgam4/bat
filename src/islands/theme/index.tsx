import Button from "@components/button"
import { ThemeContext } from "@context/theme"

export default function () {
  const [theme, { toggleTheme }] = useContext(ThemeContext)
  return (
    <Button onClick={toggleTheme}>
      {() => {
        return theme.name === 'dark' ?
          <div class="i-carbon-sun w-6 h-6" /> :
          <div class="i-carbon-moon w-6 h-6" />
      }}
    </Button>
  )
}
