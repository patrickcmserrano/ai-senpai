import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9c27b0', // Lilás ou roxo
    },
    background: {
      default: '#121212', // Fundo escuro
      paper: '#1d1d1d',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          '@media (max-width: 600px)': {
            flexDirection: 'column',
            overflow: 'auto',
          },
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          '@media (max-width: 600px)': {
            flexDirection: 'column',
            overflow: 'auto',
          },
        },
      },
    },
  },
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
