import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import TheLayout from './components/TheLayout';
import MessageCenter from './features/MessageCenter';
import customTheme from './lib/theme';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <TheLayout>
        <MessageCenter />
      </TheLayout>
    </ThemeProvider>
  );
}

export default App;
