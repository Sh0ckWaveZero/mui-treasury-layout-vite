import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, useColorScheme } from '@mui/material/styles';
import App from './App.tsx';
import getTheme from './styles/theme.ts';

const Main = () => {
  const { mode, systemMode } = useColorScheme();
  const theme = getTheme((systemMode || mode) as 'light' | 'dark');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main />
  </StrictMode>,
);
