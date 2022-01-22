import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main_top from './Main_top'
import Main_bottom from './Main_bottom'

const Root = () => (
      <BrowserRouter>
          <Main_bottom />
          <Main_top/ >
      </BrowserRouter>
);
export default Root;