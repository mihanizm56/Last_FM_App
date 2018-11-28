import React from "react";
import PropTypes from "prop-types";
import "./playButton.css";
import playImage from './img/playButton.svg'
import pauseImage from './img/pauseButton.svg'

export const PlayButton = ({ isPlaying, callback }) => {
  return (
    <div className="icon-wrapper" onClick={() => callback(!isPlaying)}>
      <img className="icon-image" alt='logoImage' src={isPlaying ? pauseImage : playImage}/>
    </div>
  )
};

PlayButton.defaultProps = {
  callback: () => alert("callback is undefined")
};

PlayButton.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired
};
