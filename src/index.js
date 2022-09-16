import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import {APIProvider} from './context/ContextApi';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <APIProvider>
      <App />
    </APIProvider>
  </React.StrictMode>
);


