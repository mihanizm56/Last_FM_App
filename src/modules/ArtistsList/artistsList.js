import React from "react";
import { ArtistBox } from "./../ArtistBox/artistBox";
import PropTypes from "prop-types";
import "./artistsList.css"

export const ArtistsList = ({ list }) => {
  return (
    <div className="artistsList">
      {list.map((item, index) => (
        <ArtistBox key={index} name={item.name} image={item.images[4]} />
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
