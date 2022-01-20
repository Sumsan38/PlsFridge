import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App';
import BottomNav from './BottomNav';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BottomNav /> {/* nav 가 항상 떠있도록 index.js에서 호출 */}
      <App /> {/* bottom 에 따라 바뀌는 본문 */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
