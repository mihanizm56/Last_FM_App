import React from "react"
import {
  TitleH2,
  LinkItem,
  SearchField,
  FilterGenres,
} from "../../../components"
import "./AlbumTitleBlock.css"
import { withEnterExitAnimation } from "../../../libs/Animation"
import { isEmpty } from "../../../helpers"

const styleSearch = {
  marginTop: "40px",
}

const AlbumTitleBlock = withEnterExitAnimation(
  ({ listOfGenres, albumName, path, artistName }) => {
    return (
      <div className="album-main-wrapper">
        <div className="album-main-firstHalf">
          <TitleH2 name={albumName} />
          <LinkItem name={artistName} path={path} />
          <SearchField placeholder="Поиск композиции" style={styleSearch} />
        </div>
        <div className="album-main-secondHalf">
          <FilterGenres listOfGenres={listOfGenres} />
        </div>
      </div>
    )
  }
)

const AnimatedAlbumTitleBlock = props => {
  const condition = !isEmpty(
    props.albumName && props.path && props.listOfGenres && props.artistName
  )
  return <AlbumTitleBlock is={condition} {...props} />
}

export { AnimatedAlbumTitleBlock as AlbumTitleBlock }
