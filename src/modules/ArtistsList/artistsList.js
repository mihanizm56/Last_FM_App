import React from "react";
import { ArtistBox } from "./../ArtistBox/artistBox";
import PropTypes from "prop-types";
import "./artistsList.css"

export const ArtistsList = ({ from, to, list }) => {
  const listForPage = list.slice(from, to);
  return (
    <div className="artistsList">
      {listForPage.map((item, index) => (
        <ArtistBox key={index} name={item.name} image={item.images[4]} />
      ))}
    </div>
  );
};

ArtistsList.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired
};
