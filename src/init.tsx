import { ThemeProvider } from '@emotion/react';
import App from './app/app';
import { breakpoints } from './app/theme';

const Init = () => {
  return (
    <ThemeProvider theme={{ breakpoints }}>
      <App />
    </ThemeProvider>
  );
};

export default Init;
