import React from "react";
import "./App.css";
import { Switch, Route} from "react-router-dom";
import Home from './pages/Home';

const App = () => {
//main
  // todo, add more pages!

  return (
    <div>
      <Switch>
        <Route path="/">
          <Home ws={ws} />
        </Route>
      </Switch>
    </div>
  );
};


export default App;
