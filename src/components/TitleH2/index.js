import React from "react";
import PropTypes from "prop-types";

export const TitleH2 = ({name}) => <h2 className='title_h2'>{ name }</h2>

TitleH2.defaultProps = {
    name:'title is empty'
  };
  
  TitleH2.propTypes = {
    name:PropTypes.string.isRequired
};