import React, { Fragment, Component } from "react"
import "./Tracks.css"
import { Route, Switch } from "react-router"
import {
  TracksTitleBlock,
  TracksListTracks,
  PaginationBlock,
} from "../../modules"
import { searchTracksName, getTopTracks } from "../../helpers/api"
import { listOfGenres } from "../../helpers/api/config"
import { partial } from "../../helpers"

const Page = ({ list, paginationCb, ...props }) => {
  return (
    <Fragment>
      <TracksTitleBlock listOfGenres={listOfGenres} {...props} />
      <TracksListTracks list={list} />
      <PaginationBlock callbackForPagging={item => paginationCb(item[0])} />
    </Fragment>
  )
}

class Tracks extends Component {
  state = {
    trackList: [],
    searchWord: "",
  }
  constructor(props) {
    super(props)
    this.search = this.search.bind(this)
  }
  componentDidMount() {
    const track = this.props.match.params.track
    this.search(track)
  }
  search(searchWord, page = 1) {
    this.searchWord = searchWord
    searchWord
      ? searchTracksName(searchWord, page, data => {
          this.setState({
            trackList: data.result.slice(-9),
          })
        })
      : this.getTopTracks(page)
  }
  getTopTracks(page) {
    getTopTracks(page, 10, data => {
      this.setState({
        trackList: data.result.slice(-9),
      })
    })
  }
  render() {
    return (
      <Page
        paginationCb={partial(this.search, this.searchWord)}
        callback={this.search}
        list={this.state.trackList}
      />
    )
  }
}

const TracksPage = props => {
  return (
    <Switch>
      <Route exact path="/tracks" component={Tracks} />
      <Route path="/tracks/:track" component={Tracks} />
    </Switch>
  )
}

export { TracksPage as Tracks }
