import React from "react";
import PropTypes from "prop-types";
import "./TracksTitleBlock.css";
import { 
  TitleH2, 
  // FilterGenres, 
  SearchField 
} from "../../../components";

export const TracksTitleBlock = ({ listOfGenres }) => {
  return (
    <div className="songs-main-wrapper">
      <div className="songs-main-firstHalf">
        <TitleH2 name="Треки" />
      </div>
      <div className="songs-main-secondHalf">
        <SearchField placeholder="Поиск композиции" />
      </div>
    </div>
  );
};

TracksTitleBlock.defaultProps = {
  listOfGenres: []
};

TracksTitleBlock.propTypes = {
  listOfGenres: PropTypes.array.isRequired
};