import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import reset from 'react-style-reset/string';
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyles = createGlobalStyle`
  ${reset}
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;


ReactDOM.render(
  
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);