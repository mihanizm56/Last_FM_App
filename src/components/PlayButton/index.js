import React from "react"
import PropTypes from "prop-types"
import "./PlayButton.css"
import playImage from "./img/playButton.svg"
import pauseImage from "./img/pauseButton.svg"
import { withPressAnimation } from "../../libs/Animation"

export const PlayButton = withPressAnimation(({ isPlaying, callback }) => {
  return (
    <i className="icon-wrapper" onClick={() => callback(!isPlaying)}>
      <img
        className="icon-image"
        alt="logoImage"
        src={isPlaying ? pauseImage : playImage}
      />
    </i>
  )
})

PlayButton.defaultProps = {
  isPlaying: false,
  callback: () => alert("callback is undefined"),
}

PlayButton.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
}
