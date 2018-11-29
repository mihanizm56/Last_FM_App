import React from "react";
import PropTypes from "prop-types";
import "./TrackBoxForChart.css";
import { 
  LinkItem, 
  MiddleImage, 
  Paragraph  
} from "../../../components";

export const TrackBoxForChart = ({ trackName, artistName, genre, image }) => {
  return (
    <div className="artist-chartBlock-wrapper">
      <div className="artist-second-block">
            <MiddleImage className='kek' image={image} />
        <div className="artist-second-block__first-half">
          <Paragraph  name={trackName} />
          <Paragraph  name={genre} />
        </div>
        <div className="artist-second-block__second-half">
          <LinkItem name={artistName} path={`artists/${artistName}`} />
        </div>
      </div>
    </div>
  );
};

TrackBoxForChart.defaultProps = {
  trackName: "test-track-name",
  artistName: "test-artist-name",
  genre: "test-genre-name",
  image: "test-image-name"
};

TrackBoxForChart.propTypes = {
  trackName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
