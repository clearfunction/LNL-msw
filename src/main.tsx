import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

var bob = import.meta.env.VITE_Mock;

console.log(bob)

 const { worker } = await import('./mock/browser');
 worker.start();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
