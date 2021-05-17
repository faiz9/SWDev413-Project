import React from "react";
import "./App.css";
import { Switch, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import postListing from './pages/postListing'

const App = ({ ws }) => {
//main
  // todo, add more pages!

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/postListing">Post</Link>
      </nav>
      <Switch>
        <Route path="/">
          <Home ws={ws} />
        </Route>
        <Route path="/post">
          <postListing ws={ws}/>
        </Route>
      </Switch>
    </div>
  );
};


export default App;
