import React from "react";
import PropTypes from "prop-types";
import "./album.css";
import { TitleH2 } from "../../components/TitleH2/title";
import { LinkItem } from "../../components/LinkItem/linkItem";
import { SearchField } from "../../components/SearchField/searchField";
import { FilterGenres } from "../../components/FilterGenres/filterGenres";

export const Album = ({ albumName, artistName, listOfGenres }) => {

  const styleSearch = {
    marginTop: "40px"
  };

  return (
    <div className="album-main-wrapper">
      <div className="album-main-firstHalf">
        <TitleH2 name={albumName} />
        <LinkItem name={artistName} />
        <SearchField placeholder="Поиск композиции" style={styleSearch} />
      </div>
      <div className="album-main-secondHalf">
        <FilterGenres listOfGenres={listOfGenres} />
      </div>
    </div>
  );
};

Album.propTypes = {
  albumName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  listOfGenres: PropTypes.array.isRequired
};
