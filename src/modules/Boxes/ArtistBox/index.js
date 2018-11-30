import React from "react";
import PropTypes from "prop-types";
import "./ArtistBox.css";
import { LinkItem, MiddleImage } from "../../../components";

export const ArtistBox = ({ name, image }) => {
  const imageForBlock = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat : 'no-repeat'
  };

  name = name.length > 20 ? name.slice(0,20)+'...' : name

  return (
    <div className="artist-preview__block" style={imageForBlock}>
      <LinkItem name={name} path={`artists/${name}`} />
    </div>
  );
};

ArtistBox.defaultProps = {
  name: "test",
  image: ""
};

ArtistBox.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
