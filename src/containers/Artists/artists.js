import React, { Component } from "react";
import "./artists.css";

import { TitleH2 } from "../../components/TitleH2/title";
import { SearchField } from "../../components/SearchField/searchField";
import { FilterGenres } from "../../components/FilterGenres/filterGenres";
import { ArtistsList } from "../../modules/ArtistsList/artistsList";
import { PaginationBlock } from "../../modules/PaginationBlock/paginationBlock";
import { listOfGenres } from '../../helpers/api/config'
import { getTopArtists, searchTracks, getTagTopArtists } from "../../helpers/api/index";

export default class Artists extends Component {
  constructor() {
    super();

    this.state = {
      currentPage: 1,
      arrayListArtists: [],
      paginationIsVisible: true,
      tagIsSelected: false,
      findByWord: ''
    };
  }

  componentDidMount() {
    this.getArtists();
  }

  getArtists = (page = 1) => {
    return getTopArtists(page, data => {
      if (data) {
        console.log(data)
        if (data.result.length > 9) {
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
    })
  };

  getFoundTracks = string => {
    if (string === '') return this.getArtists()
    const page = this.state.currentPage;
    searchTracks(string, page, data => {
      if (data) {
        console.log(data)
        this.setState({
          ...this.state,
          arrayListArtists: data.result.artists,
          paginationIsVisible: false,
          findByWord: string,
          tagIsSelected: false
        });
      }
    });
  };

  getNumberOfButton = page => {
    this.getArtists(page);
    this.setState({ ...this.state, currentPage: page });
  };

  getTagsItems = tag => {
    if (tag === "") return this.getFoundTracks(this.state.findByWord);

    let searchString = this.state.findByWord ? this.state.findByWord : "";
    let limit = this.state.findByWord ? 1000 : 100

    return getTagTopArtists(tag, limit, data => {
      if (data) {
        console.log(data)
        const newData = data.artist.filter(item => (item.name.toLowerCase().indexOf(searchString.toLowerCase()) >= 0));
        this.setState({
          ...this.state,
          arrayListArtists: newData,
          paginationIsVisible: false,
          tagIsSelected: true
        });
      }
    })
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
          <FilterGenres listOfGenres={listOfGenres} callback={this.getTagsItems} tagIsSelected={this.state.tagIsSelected} />
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
