import React, { Component, Fragment } from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import { LogoBlock } from "../../modules/Blocks/"
import { BounceLoading } from '../../components/'
import { Main, Album, Artists, Tracks, NotFound } from "../"
import { withRouteAnimation, withPageAnimation } from "../../libs/Animation"

const AnimatedNotFound = withPageAnimation(NotFound)
const AnimatedMain = withPageAnimation(Main)
const AnimatedAlbum = withPageAnimation(Album)
const AnimatedArtists = withPageAnimation(Artists)
const AnimatedTracks = withPageAnimation(Tracks)

const AnimatedSwitch = withRouteAnimation(() => {
  return (
    <Switch>
      <Route exact path="/" component={AnimatedMain} />
      <Route path="/album/:artist/:album" component={AnimatedAlbum} />
      <Route path="/artists" component={AnimatedArtists} />
      <Route path="/tracks" component={AnimatedTracks} />
      <Route component={AnimatedNotFound} />
    </Switch>
  )
})

class App extends Component {
  state = {
    loaded: false
  }

  setLoading = parameter => {
    this.setState({ loaded: parameter })
  }

  render() {
    const { loaded } = this.state
    return (
      <Fragment>
        <div className="App">
          <LogoBlock load={this.setLoading} />
          {
            loaded ? <AnimatedSwitch />
                : <div className="mainCircle">
                    <BounceLoading />
                  </div>
          }
        </div>
      </Fragment>
    )
  }
}

export default App
