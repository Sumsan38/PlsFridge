import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App';
import BottomNav from './BottomNav';
import Menu from './Menu';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Menu /> */}
      <BottomNav /> {/* nav 가 항상 떠있도록 index.js에서 호출 */}
      <App /> {/* bottom 에 따라 바뀌는 본문 */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
