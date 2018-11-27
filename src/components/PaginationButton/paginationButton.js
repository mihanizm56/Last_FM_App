import React from "react";
import PropTypes from "prop-types";
import "./paginationButton.css";

export const PaginationButton = ({ callback,number }) => {
  let _number = React.createRef()
  return (
    <button ref={value => _number = value} value={number} className="pag-button" onClick={() => callback(+_number.value)}>
      {number}
    </button>
  );
};

PaginationButton.defaultProps = {
  number: "undefined",
  callback:(value) => console.log(value),
};

PaginationButton.propTypes = {
  number: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
};
