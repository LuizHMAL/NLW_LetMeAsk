import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

function App() {
  return (
    <div className='container'>
      <switch>
        <BrowserRouter>
          <Route path="/" component={Home} />
        </BrowserRouter>
      </switch>
    </div>
  );
}

export default App;
