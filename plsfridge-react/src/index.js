import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Test용 빈 페이지

ReactDOM.render(
    <App message="Hello Props Message"/>,
    document.getElementById('root')
);







// 메인 페이지를 통해 Axios 연결
/*
import reportWebVitals from './reportWebVitals';
import TestApp from './AxiosTest'; // Test용 빈 페이지 제거
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <TestApp />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
*/
