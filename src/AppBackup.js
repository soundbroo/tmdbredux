import React, { Component } from "react";
import "../css/App.css";
import Main from "./Main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <header className="app-header">
            <img
              className="app-logo"
              alt="app-logo"
              src="https://www.themoviedb.org/assets/1/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"
            />
            <Link className="app-link" to="/">
              The Movie Database|
            </Link>
            <Link className="app-link" to="/favourite">
              |Избранное
            </Link>
          </header>
        </div>
        <Main />
      </>
    );
  }
}

export default App;
