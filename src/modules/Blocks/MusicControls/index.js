import React from "react";
import PropTypes from "prop-types";
import "./MusicControls.css";
import { PlayButton, ButtonChangeRadio, ButtonPlusMinus } from "../../../components";

const MusicControls = ({ prevTrack, nextTrack,isPlaying,callbackForPlaying }) => {
  return (
    <div className='music-controls__second-half'>
        <ButtonChangeRadio parameter="backward" callback={prevTrack} />
        <PlayButton callback={callbackForPlaying} isPlaying={isPlaying} />
        <ButtonChangeRadio parameter="forward" callback={nextTrack} />
  </div>
  )
};

MusicControls.defaultProps = {
    prevTrack: ()=>alert('callback is empty'), 
    nextTrack: ()=>alert('callback is empty'),
    isPlaying: false,
    callbackForPlaying: ()=>alert('callback is empty')
};

MusicControls.propTypes = {
  prevTrack: PropTypes.func.isRequired, 
  nextTrack: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  callbackForPlaying: PropTypes.func.isRequired
};

export default MusicControls