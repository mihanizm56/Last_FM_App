import React from "react"
import PropTypes from "prop-types"
import "./PaginationBlock.css"
import { PaginationButton } from "../../../components"

export const PaginationBlock = ({ callbackForPagging }) => {
  return (
    <div className="pagination-wrapper">{getButtons(callbackForPagging)}</div>
  )
}

const getButtons = callback => {
  const arrayOfArtists = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return arrayOfArtists.map(element => {
    return (
      <PaginationButton
        key={element}
        callback={callback}
        number={`${element}`}
      />
    )
  })
}

PaginationBlock.defaultProps = {
  callbackForPagging: () => alert("callback is empty")
}

PaginationBlock.propTypes = {
  callbackForPagging: PropTypes.func.isRequired,
}
