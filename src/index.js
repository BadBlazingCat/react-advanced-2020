import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//StrictMode cause the component to be render twice
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
