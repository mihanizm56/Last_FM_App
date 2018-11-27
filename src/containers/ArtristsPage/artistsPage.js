import React, { Component } from "react";
import { TitleH2 } from "../../components/TitleH2/title";
import { SearchField } from "../../components/SearchField/searchField";
import { FilterGenres } from "../../components/FilterGenres/filterGenres";
import { ArtistsList } from "../../modules/ArtistsList/artistsList";
import { PaginationBlock } from "../../modules/PaginationBlock/paginationBlock";
import "./artistsPage.css";
import LastFM from "last-fm";

export class ArtistsPage extends Component {
  state = {
    from: 0,
    to: 9,
    arrayListArtists: []
  };

  config = () => {
    return {
      page: 2,
      limit: 2,
      api_key: "87d932f5f0f2d91d94deb48a52f3c83a"
    };
  };

  getPropsForSlice = array => {
    this.setState({ from: array[1], to: array[2] });
  };

  componentDidMount() {
    const lastfm = new LastFM("87d932f5f0f2d91d94deb48a52f3c83a", {
      userAgent: "MyApp/1.0.0 (http://example.com)"
    });
    lastfm.chartTopArtists({ ...this.config }, (err, data) => {
      if (err) console.error(err);
      else {
        this.setState({ ...this.state,arrayListArtists: data.result}) 
        return console.log(data)
      }
    })
  }

  render() {
    // const { arrayListArtists } = this.props;
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
