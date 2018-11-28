import React from "react";
import { ArtistBox } from "./../ArtistBox/artistBox";
import PropTypes from "prop-types";
import "./artistsList.css"

export const ArtistsList = ({ list }) => {
  return (
    <div className="artistsList">
      {list.map((item, index) => (
        <ArtistBox key={index} name={item.name} image={item.images ? item.images[2] : item.image[2]['#text']} />
      ))}
    </div>
  );
};

ArtistsList.defaultProps = {
  list:[]
};

ArtistsList.propTypes = {
  list: PropTypes.array.isRequired
};
