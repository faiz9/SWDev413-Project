import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Project Name</span>
          </div>
        </nav>
      </div>
    );
  }
}
