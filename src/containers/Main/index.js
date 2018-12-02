// import React, { Fragment, Component } from "react"
import React, { Component } from "react"
import "./Main.css"
import { ArtistsList, MainTitleBlock, TracksListChart } from "../../modules"
// import {
//   compose,
//   withHoverAnimation,
//   withGroupAnimation,
// } from "../../libs/Animation"
// import LastFM from "last-fm"
import {
  getTopArtists,
  getTopTracks,
  //   getTopTracksTags,
} from "../../helpers/api"
import { shuffle } from "../../helpers"

export class Main extends Component {
  state = {
    artistsList: [],
    trackList: [],
  }
  componentDidMount() {
    this.getTopTracks()
    this.getTopArtists()
    this.intervalID = setInterval(this.shuffle, 3000)
  }
  getTopTracks = (page = 1) => {
    getTopTracks(page, 10, data => {
      this.setState({
        trackList: data.result,
      })
    })
  }
  shuffle = () => {
    this.setState({
      list: shuffle(this.state.artistsList),
    })
  }

  getTopArtists = () => {
    return getTopArtists(1, 20, data => {
      if (data) {
        this.setState({
          artistsList: data.result,
        })
      }
    })
  }
  componentWillUnmount (){
    clearInterval(this.intervalID)
  }
  render() {
    return (
      <div className="main-page">
        <MainTitleBlock
          name="ТОП 20 Артистов"
          linkName="Посмотреть всех"
          path="artists"
          className="border"
        />
        <div className="main-container top-artist-container">
          <ArtistsList list={this.state.artistsList} from={0} to={6} />
        </div>
        <MainTitleBlock
          name="Last FM Чарт (TOP 10)"
          linkName="Посмотреть всех"
          path="tracks"
          className="border"
        />
        <div className="main-container w-95">
          <TracksListChart list={this.state.trackList} />
        </div>
      </div>
    )
  }
}
