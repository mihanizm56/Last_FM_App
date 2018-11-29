import React from "react";
import PropTypes from "prop-types";
import './SearchField.css';
import posed from 'react-pose'
import {focusInit} from '../../libs/Animation/configs'

const Input = posed.input(focusInit)

export const SearchField = ({placeholder,style}) => <Input style={style} className='input-field' placeholder={placeholder}/>

SearchField.defaultProps = {
    placeholder:'placeholder is empty',
    style:{}
  };
  
SearchField.propTypes = {
    placeholder:PropTypes.string.isRequired,
    style:PropTypes.object.isRequired
};