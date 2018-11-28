import React from "react";
import PropTypes from "prop-types";
import "./searchField.css";

export const SearchField = ({ placeholder, callback }) => {
    return <input className="input-field" placeholder={placeholder} onChange={ input => callback(input.target.value)}/>;
};

SearchField.defaultProps = {
  placeholder: "placeholder is empty"
};

SearchField.propTypes = {
  placeholder: PropTypes.string.isRequired
};
