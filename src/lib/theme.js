import { createTheme } from '@mui/material/styles';
import Roboto from '../fonts/Roboto/Roboto-Regular.ttf';

const theme = createTheme({
  typography: {
    fontSize: 10, // This sets the base font size to 14px
    // You can also customize other typography properties here
    fontFamily: 'Roboto, sans-serif'
  },
  spacing: 10,
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
