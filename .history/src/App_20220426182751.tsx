import { BrowserRouter, Route } from 'react-router-dom';
import React, { Component } from 'react';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

import { ReactDom } from "./pages/ReactDom";

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>),
  document.getElementById('root'))
function App() {
  return (

    <BrowserRouter>
      <Route path='/' component={Home} />
    </BrowserRouter>
  );
}

export default App;
