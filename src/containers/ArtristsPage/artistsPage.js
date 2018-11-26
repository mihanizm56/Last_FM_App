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
      { data: "test1" },
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
      { data: "test12" }
    ],
    from: 0,
    to: 8
  };

  getValues = () => {};

  render() {
    return (
      <div className="artistsPage">
        <div className="artistsPage-title">
          <TitleH2 name="Артисты" />
        </div>
        <div className="artistsPage-filters">
          <SearchField placeholder="Поиск артиста" />
          <FilterGenres />
        </div>
        <ArtistsList list={[1, 2, 3, 4]} from={0} to={2} />
      </div>
    );
  }
}
