import { lazy } from 'solid-js'
import { Route, Routes } from 'solid-app-router'
import NotFound from '@pages/404'

const Main = lazy(() => import('@pages/main'))
const About = lazy(() => import('@pages/about'))

export default function App() {
  return (
    <Routes>
      <Route path="/" component={Main} />
      <Route path="/about" component={About} />
      <Route path="*" component={NotFound} />
    </Routes>
  )
}
