import React from 'react';
import { Content, Root } from './components/mui-treasury/layout-core-v6';
import FooterLayout from './layouts/FooterLayout';
import HeaderLayout from './layouts/HeaderLayout';
import SidebarLayout from './layouts/SidebarLayout';
import AppRouter from './routes/AppRouter';

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
  );
}
