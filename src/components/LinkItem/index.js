import React from "react";
import { Link, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { withHoverAnimation } from '../../libs/Animation'
import './LinkItem.css'

export const LinkItem = ({ name, path }) => { ///возможно компонент и пропсы прокинуть надо будет для него
  return (
    <span>
      <Link className='link-item' to={`/${path}`}>{name}</Link>
    </span>
  );
};

LinkItem.defaultProps = {
  name: "undefined",
  path: "undefined"
};

LinkItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};
