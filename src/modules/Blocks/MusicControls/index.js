import React from "react"
import PropTypes from "prop-types"
import "./MusicControls.css"
import { PlayButton, ButtonChangeRadio } from "../../../components"

const MusicControls = ({
  prevTrack,
  nextTrack,
  isPlaying,
  callbackForPlaying
}) => {
  return (
    <div className="music-controls__second-half">
      <ButtonChangeRadio parameter="backward" callback={prevTrack} />
      <PlayButton callback={callbackForPlaying} isPlaying={isPlaying} />
      <ButtonChangeRadio parameter="forward" callback={nextTrack} />
    </div>
  )
}

MusicControls.defaultProps = {
  isPlaying: false
}

MusicControls.propTypes = {
  prevTrack: PropTypes.func,
  nextTrack: PropTypes.func,
  isPlaying: PropTypes.bool.isRequired,
  callbackForPlaying: PropTypes.func
}

export default MusicControls
