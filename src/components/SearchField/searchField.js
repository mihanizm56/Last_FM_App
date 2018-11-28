import React from "react";
import PropTypes from "prop-types";
import "./searchField.css";

export const SearchField = ({ placeholder, callback, style }) => {
  return <input className="input-field" style={style} placeholder={placeholder} onChange={input => callback(input.target.value)} />;
};

SearchField.defaultProps = {
  placeholder: "placeholder is empty",
  style:{}
};

SearchField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired
};
