import React from "react";
import PropTypes from "prop-types";
import "./songsBigBlock.css";
import { TitleH2 } from "../../components/TitleH2/title";
import { SearchField } from "../../components/SearchField/searchField";
import { FilterGenres } from "../../components/FilterGenres/filterGenres";

export const SongsBigBlock = ({ listOfGenres }) => {
  return (
    <div className="songs-main-wrapper">
      <div className="songs-main-firstHalf">
        <TitleH2 name="Треки" />
      </div>
      <div className="songs-main-secondHalf">
        <SearchField placeholder="Поиск композиции" />
        <FilterGenres listOfGenres={listOfGenres} />
      </div>
    </div>
  );
};

SongsBigBlock.propTypes = {
  listOfGenres: PropTypes.array.isRequired
};
