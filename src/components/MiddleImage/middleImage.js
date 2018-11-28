import React from "react";
import PropTypes from "prop-types";
import "./middleImage.css";

export const MiddleImage = ({ image }) => {
  return <div className='middle-image' style={{backgroundImage: `url(${image})`}} />;
};

MiddleImage.defaultProps = {
  image: ''
};

MiddleImage.propTypes = {
  image: PropTypes.string.isRequired
};