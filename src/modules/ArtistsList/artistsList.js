import React from "react";
import { ArtistBox } from "./../ArtistBox/artistBox";
import PropTypes from "prop-types";

export const ArtistsList = ({ from, to, list }) => {
  const listForPage = list.slice(from, to);
  return (
    <div>
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
