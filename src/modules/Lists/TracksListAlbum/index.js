import React from "react"
import PropTypes from "prop-types"
import "./TracksListAlbum.css"
import {
  compose,
  withHoverAnimation,
  withGroupAnimation,
} from "../../../libs/Animation"

import { TrackBoxForAlbum } from "../../Boxes"

const List = compose(
  withGroupAnimation,
  withHoverAnimation
)(TrackBoxForAlbum)

export const TracksListAlbum = ({ list }) => {
  const childrensProps = list.map((el, id) => {
    return {
      ...el,
      key: el.name + el.image[0],
      image: el.images[2],
      trackName: el.name,
    }
  })
  return <List className="track-list" childrensProps={childrensProps} />
}

TracksListAlbum.defaultProps = {
  list: [],
}

TracksListAlbum.propTypes = {
  list: PropTypes.array.isRequired,
}
