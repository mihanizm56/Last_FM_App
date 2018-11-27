import React, { Component } from "react";
import { TitleH2 } from "../../components/TitleH2/title";
import { SearchField } from "../../components/SearchField/searchField";
import { FilterGenres } from "../../components/FilterGenres/filterGenres";
import { ArtistsList } from "../../modules/ArtistsList/artistsList";
import { PaginationBlock } from "../../modules/PaginationBlock/paginationBlock";
import "./artistsPage.css";

export class ArtistsPage extends Component {
  state = {
    arrayListArtists: [
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
    ],
    from: 0,
    to: 9
  };

  getPropsForSlice = array => {
    this.setState({ ...this.state, from: array[1], to: array[2] });
  };

  render() {
    const { arrayListArtists, from, to } = this.state;
    return (
      <div className="artistsPage">
        <div className="artistsPage-title">
          <TitleH2 name="Артисты" />
        </div>
        <div className="artistsPage-filters">
          <SearchField placeholder="Поиск артиста" />
          <FilterGenres />
        </div>
        <ArtistsList list={arrayListArtists} from={from} to={to} />
        <PaginationBlock
          artistsList={arrayListArtists}
          callbackForPagging={this.getPropsForSlice}
        />
      </div>
    );
  }
}
