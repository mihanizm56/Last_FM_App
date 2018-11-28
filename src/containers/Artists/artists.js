import React, { Component } from "react";
import { TitleH2 } from "../../components/TitleH2/title";
import { SearchField } from "../../components/SearchField/searchField";
import { FilterGenres } from "../../components/FilterGenres/filterGenres";
import { ArtistsList } from "../../modules/ArtistsList/artistsList";
import { PaginationBlock } from "../../modules/PaginationBlock/paginationBlock";
import LastFM from "last-fm";
import "./artists.css";

export default class Artists extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      arrayListArtists: [],
      paginationIsVisible: true,
      tagIsSelected:false,
      findByWord:''
    };

    this.listOfGenres = ['metal', 'rock', 'pop', 'punk', 'funk', 'blues', 'jazz']
    this.api_key = "f65384e5d8c2e5dfd1458348d592a516";
    this.limitPerPage = 9;

    this.lastfm = new LastFM(this.api_key, {
      userAgent: "MyApp/1.0.0 (http://example.com)"
    });
  }

  componentDidMount() {
    this.getArtists();
  }

  getArtists = (page = 1) => {
    console.log(`page = ${page}`);
    const api_key = this.api_key;
    const limitPerPage = this.limitPerPage;

    this.lastfm.chartTopArtists(
      { page: page, limit: limitPerPage, api_key: api_key },
      (err, data) => {
        if (data) {
          if (data.result.length > 9) {
            console.log(data.result);
            return this.setState({
              ...this.state,
              arrayListArtists: data.result.slice(-9),
              currentPage: page,
              paginationIsVisible: true
            });
          } else
            return this.setState({
              ...this.state,
              arrayListArtists: data.result,
              currentPage: page,
              paginationIsVisible: true
            });
        }
        console.error(err);
      }
    );
  };

  getFoundTracks = string => {
    if (string === '') return this.getArtists()
    console.log("check getFoundTracks");
    const key = this.api_key;
    const page = this.state.currentPage;

    this.lastfm.search(
      { artist: string, api_key: key, page: page, q: string },
      (err, data) => {
        if (data) {
          console.log(data.result);
          this.setState({
            ...this.state,
            arrayListArtists: data.result.artists,
            paginationIsVisible: false,
            findByWord: string,
            tagIsSelected: false
          });
        } else console.log(err);
      }
    );
  };

  getNumberOfButton = page => {
    console.log(`get number of button ${page}`);
    this.getArtists(page);
    this.setState({ ...this.state, currentPage: page });
  };

  getTagsItems = tag => {
    if (tag === "") return this.getFoundTracks(this.state.findByWord);
    
    let searchString = this.state.findByWord ? this.state.findByWord : "";
    console.log(`tag = ${tag}, searchString=${searchString}`);
    const key = this.api_key;
    let limit = this.state.findByWord ? 1000 : 100

    this.lastfm.tagTopArtists(
      { tag: tag, api_key: key, limit: limit },
      (err, data) => {
        if (data) {
          const newData = data.artist.filter(item => (item.name.toLowerCase().indexOf(searchString.toLowerCase()) >= 0));
          console.log(newData);
          this.setState({
            ...this.state,
            arrayListArtists: newData,
            paginationIsVisible: false,
            tagIsSelected:true
          });
        } else console.log(err);
      }
    );
  }

  render() {
    const { arrayListArtists, paginationIsVisible } = this.state;
    return <div className="artistsPage-wrapper">
      <div className="artistsPage">
        <div className="artistsPage-title">
          <TitleH2 name="Артисты" />
        </div>
        <div className="artistsPage-filters">
          <SearchField placeholder="Поиск артиста" callback={this.getFoundTracks} />
          <FilterGenres listOfGenres={this.listOfGenres} callback={this.getTagsItems} tagIsSelected={this.state.tagIsSelected}/>
        </div>
      </div>
      <div className="artistsPage-artistsList">
        <ArtistsList list={arrayListArtists} />
      </div>
      {paginationIsVisible ? <div className="PaginationBlock-wrapper">
        <PaginationBlock artistsList={arrayListArtists} callbackForPagging={this.getArtists} />
      </div> : null}
    </div>;
  }
}
