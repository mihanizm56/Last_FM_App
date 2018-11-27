import React, { Component } from "react";
import { TitleH2 } from "../../components/TitleH2/title";
import { SearchField } from "../../components/SearchField/searchField";
import { FilterGenres } from "../../components/FilterGenres/filterGenres";
import { ArtistsList } from "../../modules/ArtistsList/artistsList";
import { PaginationBlock } from "../../modules/PaginationBlock/paginationBlock";
import "./artistsPage.css";

export class ArtistsPage extends Component {
  state = {
    from: 0,
    to: 9
  };

  getPropsForSlice = array => {
    this.setState({ from: array[1], to: array[2] });
  };

  render() {
    const { arrayListArtists } = this.props;
    const { from, to } = this.state;
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
