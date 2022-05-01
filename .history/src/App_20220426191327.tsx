import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';


import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" exact="true" element={<Home />} />
        <Route path="/rooms/new" element={<NewRoom />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
