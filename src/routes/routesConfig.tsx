import { RouteObject } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import NotFound from '../components/NotFound'

const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default routesConfig
