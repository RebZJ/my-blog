import ReactDOM, { render, hydrate } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import WebFont from 'webfontloader';
import React, { useEffect } from "react";
import { useLocation, } from "react-router-dom";


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

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<BrowserRouter><ScrollToTop /><App /></BrowserRouter>, rootElement);
} else {
  render(<BrowserRouter><ScrollToTop /><App /></BrowserRouter>, rootElement);
}

// ReactDOM.render(

//     <BrowserRouter>
//       <ScrollToTop />
//       {
//       hydrate(<App />, rootElement)}
//     </BrowserRouter>

//   , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
