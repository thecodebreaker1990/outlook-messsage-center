import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Layout from './components/Layout';

const theme = createTheme({
  typography: {
    fontSize: 16 // This sets the base font size to 16px
    // You can also customize other typography properties here
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
