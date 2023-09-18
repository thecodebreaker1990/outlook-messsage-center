import { createTheme } from '@mui/material/styles';
import Roboto from '../fonts/Roboto/Roboto-Regular.ttf';

let theme = createTheme({
  typography: {
    fontSize: 14, // This sets the base font size to 10px
    // You can also customize other typography properties here
    fontFamily: 'Roboto, sans-serif'
  },
  spacing: 10,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1366, // Custom breakpoint
      xxl: 1920 // Custom breakpoint
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Roboto'), local('Roboto-Regular'), url(${Roboto}) format('ttf');
        }
      `
    }
  }
});

export default theme;
