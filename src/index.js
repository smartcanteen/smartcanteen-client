import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider } from '@material-ui/core/styles'
import customTheme from 'theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);