import React, { Component } from "react";
import "./LogoBlock.css";
import { SmallImage, Logo, PlayButton, ButtonChangeRadio } from "../../../components/";
import LastFM from "last-fm";
import { api_key, userAgent } from "../../../helpers/api/config";

import { Howl } from "howler";
import { Playlist } from "../../../helpers/music/config-music";

export default class LogoBlock extends Component {
  constructor() {
    super();

    this.state = {
      isPlaying: false,
      currentTrack: 0
    };

    this.lastfm = new LastFM(api_key, {
      userAgent: userAgent
    });
  }

  getFoundTracks = ({ name, artist }) => {

    this.lastfm.search(
      { track: name, artist: artist, api_key: api_key, q: name },
      (err, data) => {
        if (data) {
          this.setState({
            currentTrack: data.result.tracks[0]
          });
        } else console.warn(err);
      }
    );
  };

  callbackForPlaying = playingStatus => {
    if (playingStatus) {
      console.log(`playingStatus is true`);
      this.playTracks(true);
      this.setState({ isPlaying: playingStatus });
    } else {
      console.log(`playingStatus is false`);
      this.playTracks(false);
    }

    this.setState({ isPlaying: playingStatus });
  };

  playTracks = parameter => {
    if (parameter) {
      return this.song.play()
    }

    this.song.stop()
  };

  nextTrack = () => {
    console.log('test seek')
    this.playTracks(false)

    const numberOfTrack = this.state.currentTrack

    this.setTrack(numberOfTrack)

    setTimeout(() => {
      this.playTracks(true)
    }, 1000);

    this.setState({ ...this.state, currentTrack: this.state.currentTrack + 1 })
  }

  prevTrack = () => {
    console.log('test seek')
    if (this.state.currentTrack) return this.setState({ ...this.state, currentTrack: this.state.currentTrack - 1 })
  }

  setTrack = index => {
    const song = new Howl({
      src: Playlist[index],
      loop: true,
      volume: 0.5,
      onload: () => console.log("loaded"),
      onend: function () {
        console.log("Finished!");
      }
    });
    this.setState({ ...this.state, currentTrack: index })
    this.song = song
  }

  componentDidMount() {
    this.setTrack(0)
    console.log('track 0 was setted')
  }

  render() {
    const { isPlaying } = this.state;
    return <div className="logo-main-wrapper">
        <div className="logo-first-half">
          <SmallImage />
          <Logo />
        </div>
        <div className="logo-second-half">
          <ButtonChangeRadio parameter="backward" callback={this.prevTrack} />
          <PlayButton callback={this.callbackForPlaying} isPlaying={isPlaying} />
          <ButtonChangeRadio parameter="forward" callback={this.nextTrack} />
        </div>
      </div>;
  }
}



