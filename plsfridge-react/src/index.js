import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Main_top from './Main_top'
import Main_bottom from './Main_bottom'
export { default as MyPage } from './my/MyPage';
export { default as TodayReceipt } from './receipt/TodayReceipt';

ReactDOM.render(
   <React.StrictMode>
       <BrowserRouter>
           <Main_bottom />
           <Main_top/ >
       </BrowserRouter>
   </React.StrictMode>,
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
