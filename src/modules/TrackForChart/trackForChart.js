import React from "react";
import PropTypes from "prop-types";
import "./trackForChart.css";
import { LinkItem } from "../../components/LinkItem/linkItem";
import { MiddleImage } from "../../components/MiddleImage/middleImage";
import { Paragraph } from "../../components/Paragraph/paragraph";

export const TrackForChart = ({ trackName, artistName, genre, image }) => {
  return (
    <div className="artist-chartBlock-wrapper">
      <MiddleImage image={image} />
      <div className="artist-second-block">
        <div className="artist-second-block__first-half">
          <Paragraph name={trackName} />
          <LinkItem name={artistName} path={`artists/${artistName}`} />
        </div>
        <div className="artist-second-block__second-half">
          <Paragraph name={genre} />
        </div>
      </div>
    </div>
  );
};

TrackForChart.defaultProps = {
  trackName: "test-track-name",
  artistName: "test-artist-name",
  genre: "test-genre-name",
  image: "test-image-name"
};

TrackForChart.propTypes = {
  trackName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
