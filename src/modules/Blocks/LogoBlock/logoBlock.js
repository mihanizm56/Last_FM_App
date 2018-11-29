import React, { Component } from "react";
// import PropTypes from "prop-types";
import "./logoBlock.css";
import { SmallImage } from "../../components/SmallImage/smallImage";
import { Logo } from "../../components/Logo/logo";
import { PlayButton } from "../../components/PlayButton/playButton";
// import SpotifyListener from "spotify-activity-listener";
import LastFM from "last-fm";
import { api_key, userName, userAgent } from "../../helpers/api/config";

// import { api_key, userName, userAgent } from '../../music/playlist/01.mp3';
import { Howl } from "howler";
import { Playlist } from '../../helpers/music/config-music'

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
    console.log(`name = ${name}, artist = ${artist}`);
    console.log("check getFoundTracks");

    this.lastfm.search(
      { track: name, artist: artist, api_key: api_key, q: name },
      (err, data) => {
        if (data) {
          console.log("track found");
          console.log(data.result.tracks[0]);
          this.setState({
            currentTrack: data.result.tracks[0]
          });
        } else console.log(err);
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
    if(parameter){
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
    
    this.setState({...this.state,currentTrack:this.state.currentTrack + 1})
  }

  prevTrack = () => {
    console.log('test seek')
    if(this.state.currentTrack) return this.setState({...this.state,currentTrack:this.state.currentTrack - 1})
  }

  setTrack = index => {
    return new Promise((res,rej) => {
      const song = new Howl({
        src: Playlist[index],
        loop: true,
        volume: 0.5,
        onload: () => console.log("loaded"),
        onend: function() {
          console.log("Finished!");
        }
      });
      this.setState({...this.state,currentTrack:index})
      this.song = song
    })
  }

  componentDidMount(){
    this.setTrack(0)
    console.log('track 0 was setted')
  }

  render() {
    const { isPlaying } = this.state;
    return (
      <div className="logo-main-wrapper">
        <div className="logo-first-half">
          <SmallImage />
          <Logo />
        </div>
        <div className="logo-second-half">
          <PlayButton
            callback={this.callbackForPlaying}
            isPlaying={isPlaying}
          />

        </div>
        <button onClick={this.prevTrack}>предыдущий</button>
        <button onClick={this.nextTrack}>следующий</button>
      </div>
    );
  }
}
