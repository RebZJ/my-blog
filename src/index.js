import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import WebFont from 'webfontloader';
import React, { useEffect } from "react";
import { useLocation, } from "react-router-dom";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

WebFont.load({
  google: {
    families: ['Ubuntu', 'sans-serif']
  }
});

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
     
      behavior: 'smooth'
    });
    
  }, [pathname]);

  return null;
}

ReactDOM.render(
  <PerfectScrollbar>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </PerfectScrollbar>
  , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
