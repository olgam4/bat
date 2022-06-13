import { lazy } from 'solid-js'
import { Route, Routes } from 'solid-app-router'

const Main = lazy(() => import('@pages/main'))
const About = lazy(() => import('@pages/about'))
const NotFound = lazy(() => import('@pages/404'))

export default function App() {
  return (
    <Routes>
      <Route path="/" component={Main} />
      <Route path="/about" component={About} />
      <Route path="/*" component={NotFound} />
    </Routes>
  )
}
