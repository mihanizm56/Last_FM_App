import React from "react";
import PropTypes from "prop-types";
import "./ButtonChangeRadio.css";
import forwardIcon from './img/forward.svg'

export const ButtonChangeRadio = ({ parameter, callback }) => {
  return (
    parameter === 'forward' ?
      <img alt='button-radio--forward' className='button-radio button-radio--forward' src={forwardIcon} onClick={() => callback('minus')} />
      : <img alt='button-radio--backward' className='button-radio button-radio--backward' src={forwardIcon} onClick={() => callback('plus')} />
  )
};

ButtonChangeRadio.defaultProps = {
  image: "", //здесь надо вставить картинку лого, но потом решим какая картинка и запихнём сюда
  parameter: "forward",
  callback: () => alert('callback is empty')
};

ButtonChangeRadio.propTypes = {
  image: PropTypes.string.isRequired,
  parameter: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
};