import React from "react";
import "./App.css";
import { Switch, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import PostListing from './pages/postListing';

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
        <Route path="/postListing">
          <PostListing />
        </Route>
        <Route path="/">
          <Home ws={ws} />
        </Route>
      </Switch>
    </div>
    
  );
};


export default App;
