import React from "react";
import PropTypes from "prop-types";
import "./AlbumBox.css";
import { LinkItem, MiddleImage } from "../../../components";


export const AlbumBox = ({ name, image, artistName }) => {
  const imageForBlock = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat : 'no-repeat'
  };
  return (
    <div className="artist-preview__block " style={imageForBlock}>
      <LinkItem name={name} path={`album/${artistName}/${name}`} />
    </div>
  );
};

AlbumBox.defaultProps = {
  name: "test",
  image: ""
};

AlbumBox.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
