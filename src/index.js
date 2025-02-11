import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './Components/Errors/ErrorBoundary';

// Create a default theme or customize it if needed
const theme = createTheme({
  // You can customize the theme here, e.g., primary colors, typography, etc.
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);