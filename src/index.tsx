import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { informationData } from './pages/information/informationType';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(  
      <App informationData = {informationData}/> 

);

reportWebVitals();
