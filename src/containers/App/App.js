import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LogoBlock from "../../modules/LogoBlock/logoBlock";
import Album from "../Album/album";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <LogoBlock />
          <Album />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
