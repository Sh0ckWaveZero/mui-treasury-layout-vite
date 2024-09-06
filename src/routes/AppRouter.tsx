import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routesConfig from './routesConfig'

const router = createBrowserRouter(routesConfig)

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />
}

export default AppRouter
