import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="http://localhost:3000/">
          Total Items = {"  "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounter}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
