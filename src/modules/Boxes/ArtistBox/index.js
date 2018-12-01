import React from "react"
import PropTypes from "prop-types"
import "./ArtistBox.css"
import { LinkItem } from "../../../components"

export const ArtistBox = ({ name, image }) => {
  name = name.length > 20 ? name.slice(0, 20) + "..." : name

  const imageForBlock = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }

  return (
    <div className="artist-preview__block" style={imageForBlock}>
      <LinkItem name={name} path={`artists/${name}`} />
    </div>
  )
}

ArtistBox.defaultProps = {
  name: "test",
  image: "",
}

ArtistBox.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
