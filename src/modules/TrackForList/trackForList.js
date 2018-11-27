import React from "react";
import PropTypes from "prop-types";
import "./trackForList.css";
import { TrackForChart } from "../TrackForChart/trackForChart";

export const TrackForList = ({ trackName, artistName, genre, image }) => {
  return (
    <div className="artist-tracksBlock-wrapper">
      <TrackForChart
        trackName={trackName}
        artistName={artistName}
        genre={genre}
        image={image}
      />
    </div>
  );
};

TrackForList.propTypes = {
  trackName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
