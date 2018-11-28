import React, { Component } from "react";
import PropTypes from "prop-types";
import "./album.css";
import { TitleH2 } from "../../components/TitleH2/title";
import { LinkItem } from "../../components/LinkItem/linkItem";
import { SearchField } from "../../components/SearchField/searchField";
import { FilterGenres } from "../../components/FilterGenres/filterGenres";
import { listOfGenres } from '../../config'

class Album extends Component {

  constructor() {
    super()

    this.styleSearch = {
      marginTop: "40px"
    };
  }

  render() {
    const { albumName, artistName } = this.props;
    return (
      <div className="album-main-wrapper" >
        <div className="album-main-firstHalf">
          <TitleH2 name={albumName} />
          <LinkItem name={artistName} />
          <SearchField placeholder="Поиск композиции" style={this.styleSearch} />
        </div>
        <div className="album-main-secondHalf">
          <FilterGenres listOfGenres={listOfGenres} />
        </div>
        {/* Вот сюда вставляй список */}
      </div>
    )
  }
};

Album.defaultProps = {
  albumName: "test Album",
  artistName: "test artist-name"
};

Album.propTypes = {
  albumName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired
};

export default Album