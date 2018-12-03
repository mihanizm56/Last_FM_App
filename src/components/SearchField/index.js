import React from "react"
import PropTypes from "prop-types"
import "./SearchField.css"
import posed from "react-pose"
import { focusInit } from "../../libs/Animation/configs"
import { escape } from '../../helpers'

const Input = posed.input(focusInit)

export const SearchField = ({ placeholder, callback, style }) => {
  return (
    <Input
      className="input-field"
      style={style}
      placeholder={placeholder}
      onChange={input => callback(escape(input.target.value))}
    />
  )
}

SearchField.defaultProps = {
  placeholder: "placeholder is empty",
  style: {},
  callback: () => alert("callback is empty"),
}

SearchField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  callback: PropTypes.func.isRequired,
}
