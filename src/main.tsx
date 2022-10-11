import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import './index.css';
import { worker } from './mock/browser';


worker.start();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
