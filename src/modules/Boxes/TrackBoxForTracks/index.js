import React from "react";
import PropTypes from "prop-types";
import "./TrackBoxForTracks.css";
import { TrackBoxForChart } from "../TrackBoxForChart";

export const TrackBoxForTracks = ({ trackName, artistName, genre, image }) => {
  return (
    <div className="artist-tracksBlock-wrapper">
      <TrackBoxForChart
        trackName={trackName}
        artistName={artistName}
        genre={genre}
        image={image}
      />
    </div>
  );
};

TrackBoxForTracks.propTypes = {
  trackName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
