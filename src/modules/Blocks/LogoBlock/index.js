import React, { Component } from "react";
import "./LogoBlock.css";
import {
  SmallImage,
  Logo,
  PlayButton,
  ButtonChangeRadio, Paragraph
} from "../../../components/";
import { Howl } from "howler";
import { Playlist } from "../../../helpers/music/config-music";
import { getArrayOfSongs } from "../../../helpers/index";

export default class LogoBlock extends Component {
  constructor() {
    super();

    this.state = {
      isPlaying: false,
      currentTrackIndex: 0,
      TrackName: Playlist[0].trackName,
      artist: Playlist[0].artist
    };
    this.arrayOfSongs = getArrayOfSongs(Playlist);
  }

  callbackForPlaying = playingStatus => {
    if (playingStatus) {
      console.log(`playingStatus is true`);
      this.playTracks(true);
    } else {
      console.log(`playingStatus is false`);
      this.playTracks(false);
    }

    this.setState({ isPlaying: playingStatus });
  };

  playTracks = parameter => {
    if (parameter) {
      return this.song.play();
    }

    this.song.stop();
  };

  nextTrack = () => {
    console.log("test nextTrack");

    this.playTracks(false);
    this.setTrack(this.state.currentTrackIndex + 1, true);
    this.setState({
      ...this.state,
      currentTrackIndex: this.state.currentTrackIndex + 1,
      TrackName: Playlist[this.state.currentTrackIndex + 1].trackName,
      artist: Playlist[this.state.currentTrackIndex + 1].artist
    });
  };

  prevTrack = () => {
    console.log("test prevTrack");
    if (this.state.currentTrackIndex) {
      this.playTracks(false);
      this.setTrack(this.state.currentTrackIndex - 1, true);
      this.setState({
        ...this.state,
        currentTrackIndex: this.state.currentTrackIndex - 1,
        TrackName: Playlist[this.state.currentTrackIndex - 1].trackName,
        artist: Playlist[this.state.currentTrackIndex - 1].artist
      });
    }
  };

  setTrack = index => {
    const song = new Howl({
      src: this.arrayOfSongs[index],
      loop: true,
      volume: 0.5,
      onload: () => {
        console.log("loaded");
        console.log(`needToPlay = ${this.state.isPlaying}`);
        if (this.state.isPlaying) this.playTracks(true);
      }
    });
    this.song = song;
  };

  componentDidMount() {
    this.setTrack(0);
    console.log("track 0 was setted");
  }

  render() {
    const { isPlaying, TrackName, artist } = this.state;
    return <div className="logo-main-wrapper">
      <div className="logo-first-half">
        <SmallImage />
        <Logo />
      </div>
      <div className="logo-second-half">
        <Paragraph name={TrackName} />
        <Paragraph name={artist} />
        <ButtonChangeRadio parameter="backward" callback={this.prevTrack} />
        <PlayButton callback={this.callbackForPlaying} isPlaying={isPlaying} />
        <ButtonChangeRadio parameter="forward" callback={this.nextTrack} />
      </div>
    </div>;
  }
}
