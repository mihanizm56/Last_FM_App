import React, { Component } from "react"
import "./Artist.css"
import { TracksListTracks, AlbumList, ArtistCard } from "../../modules"
import {
  getArtistTopAlbums,
  getArtistInfo,
  getArtistTopTracks,
} from "../../helpers/api"

export class Artist extends Component {
  state = {
    artistInfo: {},
    topAlbums: [],
    topTracks: [],
  }

  componentDidMount() {
    this.getArtistInfo(this.props.match.params.name)
    this.getArtistTopAlbums(this.props.match.params.name)
  }

  getArtistInfo = name => {
    return getArtistInfo(name, data => {
      if (data) {
        const newArtistInfo = { name: data.name, image: data.images[1], tags: data.tags.splice(0,3).join(', ') }
        return getArtistTopTracks(name, data => {
          if (data) {
            this.setState({
              artistInfo: newArtistInfo,
              topTracks: data.result,
            })
          }
        })
      }
    })
  }

  getArtistTopAlbums = name => {
    return getArtistTopAlbums(name, data => {
      if (data) {
        this.setState({ topAlbums: data.result })
      }
    })
  }

  render() {
    return (
      <div className="artistPage">
        <ArtistCard
          name={this.state.artistInfo.name}
          genre={this.state.artistInfo.tags}
          image={this.state.artistInfo.image}
        />
        <AlbumList list={this.state.topAlbums} />
        <TracksListTracks list={this.state.topTracks} />
      </div>
    )
  }
}
