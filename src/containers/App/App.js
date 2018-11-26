import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom'
import "./App.css";
import { ArtistBox } from "../../modules/ArtistBox/artistBox";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ArtistBox />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
