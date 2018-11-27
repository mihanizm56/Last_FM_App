import React from "react";
import { ArtistBox } from "./../ArtistBox/artistBox";
import PropTypes from "prop-types";
import "./artistsList.css"

export const ArtistsList = ({ from, to, list }) => {
  const listForPage = list.slice(from, to);
  console.log(listForPage);
  return (
    <div className="artistsList">
      {listForPage.map((item, index) => (
        <ArtistBox key={index} name={item.data} image={item.image} /> /////item.data просто для примера сделал, я хз что за объект будет прилетать и что у него будет за поле для имени
      ))}
    </div>
  );
};

ArtistsList.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired
};
