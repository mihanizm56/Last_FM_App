import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ArtistsPage from "../../modules/ArtristsPage/ArtistsPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <ArtistsPage/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
