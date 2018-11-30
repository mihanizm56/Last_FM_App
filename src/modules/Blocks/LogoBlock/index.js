import React, { Component } from "react";
import "./LogoBlock.css";
import {
  Logo,
  ButtonPlusMinus,
  BounceLoading
} from "../../../components/";
import MusicControls from "../MusicControls/index";
import { Howl } from "howler";
import { Playlist } from "../../../helpers/music/config-music";
import { getArrayOfSongs } from "../../../helpers/index";
import { LiveArtistBox } from '../../Boxes/index'

export default class LogoBlock extends Component {
  constructor() {
    super();

    this.state = {
      isPlaying: false,
      currentTrackIndex: 0,
      TrackName: Playlist[0].trackName,
      artist: Playlist[0].artist,
      volume: 0.3,
      loadingControls: false
    };
    this.arrayOfSongs = getArrayOfSongs(Playlist);
  }

  callbackForPlaying = playingStatus => {
    if (playingStatus) {
      this.playTracks(true);
    } else {
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
    if (this.state.currentTrackIndex < Playlist.length - 1) {
      this.playTracks(false);

      this.setTrack(this.state.currentTrackIndex + 1);

      this.setState({
        ...this.state,
        currentTrackIndex: this.state.currentTrackIndex + 1,
        TrackName: Playlist[this.state.currentTrackIndex + 1].trackName,
        artist: Playlist[this.state.currentTrackIndex + 1].artist
      });
    }
  };

  prevTrack = () => {
    if (this.state.currentTrackIndex) {
      this.playTracks(false);

      this.setTrack(this.state.currentTrackIndex - 1);

      this.setState({
        ...this.state,
        currentTrackIndex: this.state.currentTrackIndex - 1,
        TrackName: Playlist[this.state.currentTrackIndex - 1].trackName,
        artist: Playlist[this.state.currentTrackIndex - 1].artist
      });
    }
  };

  setTrack = index => {
    const nextTrack = this.nextTrack

    this.setState({ ...this.state, loadingControls: true });

    const song = new Howl({
      src: this.arrayOfSongs[index],
      loop: true,
      volume: this.state.volume,
      onload: () => {
        if (this.state.isPlaying) this.playTracks(true);
        console.log("track is loaded");
        this.setState({ ...this.state, loadingControls: false });
      },
      onend: function() {
        console.log("track is finished");
        return nextTrack();
      }
    });
    this.song = song;
  };

  changeVolume = parameter => {
    if (parameter === "plus" && this.state.volume < 1) {
      this.song.volume(+(this.state.volume + 0.1).toFixed(1));

      this.setState({ ...this.state, volume: +(this.state.volume + 0.1).toFixed(1) });
    }
    if (parameter === "minus" && this.state.volume > 0) {
      this.song.volume(+(this.state.volume - 0.1).toFixed(1));

      this.setState({ ...this.state, volume: +(this.state.volume - 0.1).toFixed(1) });
    }
  };

  getControls = () => {
    const { isPlaying } = this.state;

    return (
      <MusicControls
        prevTrack={this.prevTrack}
        nextTrack={this.nextTrack}
        isPlaying={isPlaying}
        callbackForPlaying={this.callbackForPlaying}
      />
    );
  };

  componentDidMount() {
    this.setTrack(this.state.currentTrackIndex);
  }

  render() {
    const { TrackName, artist, loadingControls } = this.state;
    
    return (
      <div className="logo-main-wrapper">
        <div className="logo-first-half">
          <Logo />
        </div>
        <div className="logo-second-half">
          <LiveArtistBox artistName={artist} songName={TrackName} />
          <div className="music-controls">
            <div className="music-controls__first-half">
              <ButtonPlusMinus
                parameter={"minus"}
                callback={this.changeVolume}
              />
              <ButtonPlusMinus
                parameter={"plus"}
                callback={this.changeVolume}
              />
            </div>
            {loadingControls ? <BounceLoading /> : this.getControls()}
          </div>
        </div>
      </div>
    );
  }
}
