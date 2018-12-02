import React from "react"
import PropTypes from "prop-types"
import "./AlbumBox.css"
import { LinkItem } from "../../../components"
import { isEmpty } from "../../../helpers"

const AlbumBox = ({ name, image, artistName }) => {
  const imageForBlock = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }
  return (
    <div className="artist-preview__block" style={imageForBlock}>
      <LinkItem name={name} path={`album/${artistName}/${name}`} />
    </div>
  )
}

export const AnimatedAlbumBox = props => {
  const condition = !isEmpty(props.name && props.image && props.artistName)
  return <AlbumBox is={condition} {...props} />
}

AlbumBox.defaultProps = {
  name: 'test',
  image: '',
  artistName:""
}

AlbumBox.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired
}

export { AnimatedAlbumBox as AlbumBox }
