import React from "react";
import PropTypes from "prop-types";
import { Paragraph } from '../../../components'
import "./LiveArtistBox.css";

export const LiveArtistBox = ({artistName,songName}) => {
  return (
    <div className="live-music__song-block">
      <div className="song-block__first-half">
        <Paragraph name={"Сейчас играет:"} />
      </div>
      <div className="song-block__second-half">
        <Paragraph name={artistName} />
        <Paragraph name={songName} />
      </div>
    </div>
  );
};

LiveArtistBox.defaultProps = {
    artistName: 'test artist',
    songName: 'test song name'
};

LiveArtistBox.propTypes = {
  artistName: PropTypes.string.isRequired,
  songName: PropTypes.string.isRequired
};
