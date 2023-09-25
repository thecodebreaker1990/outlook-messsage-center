import './App.css';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { LanguageProvider } from './providers/languageProvider';

import TheLayout from './components/TheLayout';
import MessageCenter from './features/MessageCenter';
import customTheme from './lib/theme';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <TheLayout>
          <MessageCenter />
        </TheLayout>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
