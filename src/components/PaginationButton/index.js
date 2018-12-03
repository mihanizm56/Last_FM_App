import React from "react"
import PropTypes from "prop-types"
import "./PaginationButton.css"

export const PaginationButton = ({ number, from, to, callback }) => {
  let _number = React.createRef()
  return (
    <button
      ref={value => (_number = value)}
      value={number}
      className="pag-button"
      onClick={() => callback([_number.value, from, to])}
    >
      {<p>{number}</p>}
    </button>
  )
}

PaginationButton.defaultProps = {
  number: "undefined",
  callback: () => alert("callback is empty"),
  from: 0,
  to: 0,
}

PaginationButton.propTypes = {
  number: PropTypes.string.isRequired,
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
}
