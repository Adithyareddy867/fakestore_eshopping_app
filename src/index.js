import React from 'react';
import axios from 'axios';

// import { useEffect,useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import * as bootstrap from  'bootstrap';



import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import { MountDemo } from './component/Mount-Demo/jqueryajax';
// import {Axios} from './component/Mount-Demo/axios3rdparty'
// import { Fakestore } from './component/Mount-Demo/fakestore1';
// import { StyleBinding } from './component/Mount-Demo/stylebinding';
// import { Fakestore } from './component/Mount-Demo/fakestore1';
import { Fakestore } from './component/Mount-Demo/fakestore1';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Fakestore />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
