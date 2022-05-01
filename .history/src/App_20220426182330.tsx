import { BrowserRouter, Route } from 'react-router-dom';
import React, { Component } from 'react';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

function App() {
  return (

    <BrowserRouter>
      <Route path='/' components={Home} />
    </BrowserRouter>
  );
}

export default App;
