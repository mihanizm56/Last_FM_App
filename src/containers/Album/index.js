import React from "react";
import PropTypes from "prop-types";
import "./Album.css";
import { 
  TitleH2,
  LinkItem,
  SearchField,
  FilterGenres
} from "../../components";
import {
  LogoBlock
} from '../../modules'

import LastFM from 'last-fm'

export const Album = ({ albumName, artistName, listOfGenres }) => {
  constructor() {
    super()

    this.styleSearch = {
      marginTop: "40px"
    };
  }

  return (
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
  );
};

Album.propTypes = {
  albumName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  listOfGenres: PropTypes.array.isRequired
};
