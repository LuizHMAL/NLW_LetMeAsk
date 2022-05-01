import { BrowserRouter, Route } from 'react-router-dom';


import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

function App() {
  return (
    <Home />
    // <BrowserRouter>
    //   <Route path="/" element={<Home />} />
    // </BrowserRouter>
  );
}

export default App;
