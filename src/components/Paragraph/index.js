import React from "react";
import PropTypes from "prop-types";
import './Paragraph.css'

export const Paragraph = ({name}) => <p  className='paragraph'>{name}</p>

Paragraph.defaultProps = {
    name:'undefined'
  };
  
Paragraph.propTypes = {
    name:PropTypes.string.isRequired
};