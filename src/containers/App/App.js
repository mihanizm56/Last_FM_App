import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { LogoBlock } from "../../modules/LogoBlock/logoBlock";
import { AlbumPage } from "../../modules/AlbumPage/albumPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <LogoBlock />
          <AlbumPage />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
