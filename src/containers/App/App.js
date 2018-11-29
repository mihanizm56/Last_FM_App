import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LogoBlock from "../LogoBlock/logoBlock";
import Artists from "../Artists/artists";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <LogoBlock />
          <Artists />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
