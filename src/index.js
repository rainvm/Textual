import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import glcanvas from './webgl-demo'
import reportWebVitals from './reportWebVitals';
import Canvas from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React>
    <Canvas />
  </React>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
