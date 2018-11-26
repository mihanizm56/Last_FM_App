import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./paginationButton.css";

export const PaginationButton = ({ path, name }) => {
  <div className="pag-button-wrapper">
    <Link className="pag-button" to={`/artists/${path}`}>
      {name}
    </Link>
  </div>;
};

PaginationButton.defaultProps = {
  name:'undefined',
  path:'undefined'
};

PaginationButton.propTypes = {
  name:PropTypes.string.isRequired,
  path:PropTypes.string.isRequired
};