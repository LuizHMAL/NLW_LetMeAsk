import { BrowserRouter, S Router, Link, Switch, Route } from 'react-router-dom';


import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
