import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import TheLayout from './components/TheLayout';
import customTheme from './lib/theme';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <TheLayout>Here goes the main section</TheLayout>
    </ThemeProvider>
  );
}

export default App;
