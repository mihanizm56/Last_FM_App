import React, { Component } from "react";
import { TitleH2 } from "../../components/TitleH2/title";
import { SearchField } from "../../components/SearchField/searchField";
import { FilterGenres } from "../../components/FilterGenres/filterGenres";
import { ArtistsList } from "../../modules/ArtistsList/artistsList";
import { PaginationBlock } from "../../modules/PaginationBlock/paginationBlock";
import LastFM from "last-fm";
import "./artists.css";

export default class Artists extends Component {
  state = {
    currentPage: 1,
    api_key: "87d932f5f0f2d91d94deb48a52f3c83a",
    limitPerPage: 9,
    arrayListArtists: []
  };

  componentDidMount() {
    this.getArtists();
  }

  getArtists = (page = 1) => {
    console.log(`page = ${typeof page}`);
    const lastfm = new LastFM("87d932f5f0f2d91d94deb48a52f3c83a", {
      userAgent: "MyApp/1.0.0 (http://example.com)"
    });

    const { limitPerPage, api_key } = this.state;

    lastfm.chartTopArtists(
      { page, limit: limitPerPage, api_key },
      (err, data) => {
        if (data) {
          if (data.result.length > 9) {
            return this.setState({
              ...this.state,
              arrayListArtists: data.result.slice(-9),
              currentPage: page
            });
          } else
          return this.setState({
              ...this.state,
              arrayListArtists: data.result,
              currentPage: page
            });
        }
        console.error(err);
      }
    );
  };

  getNumberOfButton = page => {
    console.log(`get number of button ${page}`);
    this.getArtists(page);
    this.setState({ ...this.state, currentPage: page });
  };

  render() {
    const { arrayListArtists } = this.state;
    return (
      <>
        <div className="artistsPage">
          <div className="artistsPage-title">
            <TitleH2 name="Артисты" />
          </div>
          <div className="artistsPage-filters">
            <SearchField placeholder="Поиск артиста" />
            <FilterGenres />
          </div>
        </div>
        <div className="artistsPage-artistsList">
          <ArtistsList list={arrayListArtists} />
        </div>
        <PaginationBlock
          artistsList={arrayListArtists}
          callbackForPagging={this.getArtists}
        />
      </>
    );
  }
}
