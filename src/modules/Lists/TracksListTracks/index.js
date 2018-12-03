import React from "react"
import PropTypes from "prop-types"

import "./TracksListTracks.css"
import {
  compose,
  withHoverAnimation,
  withGroupAnimation,
} from "../../../libs/Animation"

import { TrackBoxForTracks } from "../../Boxes"

const List = compose(
  withGroupAnimation,
  withHoverAnimation
)(TrackBoxForTracks)

export const TracksListTracks = ({ list }) => {
  const childrensProps = list.map(el => {
    return {
      ...el,
      key: el.name + el.images[0],
      image: el.images[3],
      trackName: el.name,
    }
  })
  return <List className="track-list" childrensProps={childrensProps} />
}

TracksListTracks.defaultProps = {
  list: [],
}

TracksListTracks.propTypes = {
  list: PropTypes.array.isRequired,
}
