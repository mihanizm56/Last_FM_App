import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { LogoBlock } from "../../modules/LogoBlock/logoBlock";
import { ArtistsPage } from "../../containers/ArtristsPage/artistsPage"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <LogoBlock />
          <ArtistsPage />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
