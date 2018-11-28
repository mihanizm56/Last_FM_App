import React from "react";
import PropTypes from "prop-types";
import "./artistBox.css";
import { LinkItem } from "../../components/LinkItem/linkItem";

export const ArtistBox = ({ name, image }) => {
  const imageForBlock = {
    backgroundSize:'contain',
    backgroundRepeat:'no-repeat',
    backgroundImage: `url(${image})`
  };
  name = name.length > 20 ? name.slice(0,10)+'...' : name
  return (
    <div className="artist-preview__block" style={imageForBlock}>
      <LinkItem name={ name} path={`artists/${name}`} />
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
