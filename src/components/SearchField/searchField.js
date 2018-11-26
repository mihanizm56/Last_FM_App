import React from "react";
import PropTypes from "prop-types";
import './searchField.css';

export const SearchField = ({placeholder,style}) => <input style={style} className='input-field' placeholder={placeholder}/>

SearchField.defaultProps = {
    placeholder:'placeholder is empty',
    style:{}
  };
  
SearchField.propTypes = {
    placeholder:PropTypes.string.isRequired,
    style:PropTypes.object.isRequired
};