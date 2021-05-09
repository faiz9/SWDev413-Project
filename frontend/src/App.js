import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

//imported post listing, View listing and header here: 
import postListingComponent from "./components/postListing/postListingComponent";
import ViewListingComponent from "./components/viewListing/viewListingComponent";
import Header from "./components/Header/Header";
//might have to remove these pages for now since we don't need those; chech with team
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserPage from './pages/UserPage';

const App = () => {
  // todo, add more pages!
  return (
    <div>
      <Header />
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/post-listing"
              component={postListingComponent}
            ></Route>
            <Route
              exact
              path="/view-listing"
              component={ViewListingComponent}
            ></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;