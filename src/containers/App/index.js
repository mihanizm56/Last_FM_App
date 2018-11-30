import React, { Component, Fragment } from "react";
import { Switch, Route} from "react-router-dom";
import "./App.css";
import LogoBlock from '../../modules/Blocks/LogoBlock/index'
import {
  Main,
  Album,
  Artists,
  Tracks
} from '../'
import {
  withRouteAnimation,
  withPageAnimation
} from '../../libs/Animation'

const NotFound = withPageAnimation(() => <p> 404 </p>)
const AnimatedMain = withPageAnimation(Main)
const AnimatedAlbum = withPageAnimation(Album)
const AnimatedArtists = withPageAnimation(Artists)
const AnimatedTracks = withPageAnimation(Tracks)

const AnimatedSwitch = withRouteAnimation(() => {
  return (
          <Switch>
            <Route exact path='/' component={AnimatedMain}/>
            <Route path='/album/:artist/:album' component={AnimatedAlbum}/>
            <Route path='/artists' component={AnimatedArtists}/>
            <Route path='/tracks' component={AnimatedTracks}/>
            <Route component={NotFound}/>
          </Switch>
          )
})

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <LogoBlock/>
          <AnimatedSwitch/>
        </div>
      </Fragment>
    );
  }
}


export default App;
