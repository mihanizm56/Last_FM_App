import React from "react"
import PropTypes from "prop-types"
import "./ButtonPlusMinus.css"

import plusIcon from "./img/plus.svg"
import minusIcon from "./img/minus.svg"

export const ButtonPlusMinus = ({ parameter, callback }) => {
  return parameter === "plus" ? (
    <img
      alt="button-plus"
      className="button-volume button-volume-plus"
      src={plusIcon}
      onClick={() => callback("plus")}
    />
  ) : (
    <img
      alt="button-minus"
      className="button-volume button-volume-minus"
      src={minusIcon}
      onClick={() => callback("minus")}
    />
  )
}

ButtonPlusMinus.defaultProps = {
  image: "",
  parameter: "plus",
  callback: () => alert("callback is empty"),
}

ButtonPlusMinus.propTypes = {
  image: PropTypes.string.isRequired,
  parameter: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
}
