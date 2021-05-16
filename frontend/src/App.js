import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import postListingComponent from "./components/postListing/postListingComponent";
import ViewListingComponent from "./components/viewListing/viewListingComponent";
import Header from "./components/Header/Header";


const App = () => {
//main
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
