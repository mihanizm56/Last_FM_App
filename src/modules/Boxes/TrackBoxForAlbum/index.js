import React from "react"
import PropTypes from "prop-types"
import "./TrackBoxForAlbum.css"

import {
  SmallImage,
  //Paragraph,
  LinkItem,
} from "../../../components"

export const TrackBoxForAlbum = ({ image, trackName }) => {
  return (
    <div className="trackAlbum-wrapper">
      <div className="trackAlbum-first-half">
        <SmallImage image={image} />
      </div>
      <div className="trackAlbum-second-half">
        <LinkItem name={trackName} path={`tracks/${trackName}`} />
      </div>
    </div>
  )
}

TrackBoxForAlbum.defaultProps = {
  image: "",
  trackName: "",
}

TrackBoxForAlbum.propTypes = {
  image: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
}
