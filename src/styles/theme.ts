import { createTheme } from '@mui/material/styles';
import { dark, light } from '@mui/material/styles/createPalette';

// Define your custom colors
const customColors = {
  primary: {
    main: '#FF5733',
  },
  secondary: {
    main: '#33FF57',
  },
  error: {
    main: '#FF3333',
  },
  warning: {
    main: '#FFAA33',
  },
  info: {
    main: '#33AAFF',
  },
  success: {
    main: '#33FFAA',
  },
};

const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      ...customColors,
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
    colorSchemes: {
      light: {
        palette: {
          mode: 'light',
          ...light,
          ...customColors,
        },
      },
      dark: {
        palette: {
          mode: 'dark',
          ...dark,
          ...customColors,
        },
      },
    },
  });

export default getTheme;
