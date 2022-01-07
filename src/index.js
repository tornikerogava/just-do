import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import Globalstyles from './utils/global';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <App />
      <Globalstyles />
    </>
  </ThemeProvider>,
  document.getElementById('root')
);