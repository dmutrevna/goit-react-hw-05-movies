import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from 'components/Styles/Global';
import { ThemeProvider } from 'styled-components';
import { light } from 'components/Theme/Theme.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-05-movies">
    <ThemeProvider theme={light}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </BrowserRouter>
);
