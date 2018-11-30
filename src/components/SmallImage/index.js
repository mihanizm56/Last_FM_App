import React from "react";
import PropTypes from "prop-types";
import "./SmallImage.css";

export const SmallImage = ({ image }) => {
  return <div className='small-image' style={{backgroundImage:`url(${image})`}} />;
};


SmallImage.defaultProps = {
  image: './logo.png' //здесь надо вставить картинку лого, но потом решим какая картинка и запихнём сюда
};

SmallImage.propTypes = {
  image: PropTypes.string.isRequired
};