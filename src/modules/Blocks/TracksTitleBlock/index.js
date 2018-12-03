import React from "react"
import PropTypes from "prop-types"
import "./TracksTitleBlock.css"
import {
  TitleH2,
  SearchField,
} from "../../../components"

export const TracksTitleBlock = ({ callback }) => {
  return (
    <div className="songs-main-wrapper">
      <div className="songs-main-firstHalf">
        <TitleH2 name="Треки" />
      </div>
      <div className="songs-main-secondHalf">
        <SearchField placeholder="Поиск композиции" callback={callback} />
      </div>
    </div>
  )
}

TracksTitleBlock.defaultProps = {
  callback: ()=>{}
}

TracksTitleBlock.propTypes = {
  callback: PropTypes.func.isRequired
}
