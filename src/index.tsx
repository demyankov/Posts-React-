import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {informationData, postsData} from '../src/data/data'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App postsData = {postsData} informationData = {informationData}/>
  </React.StrictMode>
);

reportWebVitals();
