import React from 'react'
import { Root, Content } from './mui-treasury/layout-core-v6'
import HeaderLayout from './layouts/HeaderLayout'
import SidebarLayout from './layouts/SidebarLayout'
import FooterLayout from './layouts/FooterLayout'
import AppRouter from './routes/AppRouter'

export default function App() {
  return (
    <React.StrictMode>
      <Root>
        <HeaderLayout />
        <SidebarLayout />
        <Content>
          <AppRouter />
        </Content>
        <FooterLayout />
      </Root>
    </React.StrictMode>
  )
}
