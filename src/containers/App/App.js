import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { LogoBlock } from "../../modules/LogoBlock/logoBlock";
import { PaginationBlock } from "../../modules/PaginationBlock/paginationBlock"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <LogoBlock />
          <PaginationBlock />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
