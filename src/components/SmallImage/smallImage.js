import React from "react";
import PropTypes from "prop-types";
import "./smallImage.css";

export const SmallImage = ({ image }) => {
  return <div className='small-image' style={{backgroundImage:`${image}`}} />;
};


SmallImage.defaultProps = {
  image: '' //здесь надо вставить картинку лого, но потом решим какая картинка и запихнём сюда
};

SmallImage.propTypes = {
  image: PropTypes.string.isRequired
};