import React from "react"
import PropTypes from "prop-types"
import "./TrackBoxForChart.css"
import { LinkItem, MiddleImage, Paragraph } from "../../../components"

export const TrackBoxForChart = ({ trackName, artistName, image }) => {
  return (
    <div className="artist-chartBlock-wrapper">
      <div className="artist-second-block">
        <MiddleImage image={image} />
        <div className="artist-second-block__first-half">
          <Paragraph name={trackName} />
        </div>
        <div className="artist-second-block__second-half">
          <LinkItem name={artistName} path={`artists/${artistName}`} />
        </div>
      </div>
    </div>
  )
}

TrackBoxForChart.defaultProps = {
  trackName: "test-track-name",
  artistName: "test-artist-name",
  image: "test-image-name"
}

TrackBoxForChart.propTypes = {
  trackName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}
