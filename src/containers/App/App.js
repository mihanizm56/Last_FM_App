import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { LogoBlock } from "../../modules/LogoBlock/logoBlock";
import { ArtistsPage } from "../../containers/ArtristsPage/artistsPage";

const arrayListArtists = [
  { data: "test1" }, ///для примера завёл такой массив, по идее мы его получаем после запроса на сервер
  { data: "test2" },
  { data: "test3" },
  { data: "test4" },
  { data: "test5" },
  { data: "test6" },
  { data: "test7" },
  { data: "test8" },
  { data: "test9" },
  { data: "test10" },
  { data: "test11" },
  { data: "test12" },
  { data: "test13" },
  { data: "test14" },
  { data: "test15" },
  { data: "test16" },
  { data: "test17" },
  { data: "test18" },
  { data: "test19" },
  { data: "test20" }
];

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <LogoBlock />
          <ArtistsPage arrayListArtists={arrayListArtists} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
