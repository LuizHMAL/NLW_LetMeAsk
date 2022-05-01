import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';


import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
