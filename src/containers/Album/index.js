import React, {Component} from "react";
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
import { listOfGenres } from '../../helpers/api/config'

import LastFM from 'last-fm'

export class Album extends Component {

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
