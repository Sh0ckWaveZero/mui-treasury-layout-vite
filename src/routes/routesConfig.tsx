import { RouteObject } from 'react-router-dom';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';

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
];

export default routesConfig;
