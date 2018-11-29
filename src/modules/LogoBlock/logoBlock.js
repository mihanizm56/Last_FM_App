import React,{Component} from "react";
// import PropTypes from "prop-types";
import "./logoBlock.css";
import { SmallImage } from "../../components/SmallImage/smallImage";
import { Logo } from "../../components/Logo/logo";
import { PlayButton } from "../../components/PlayButton/playButton";
import SpotifyListener from 'spotify-activity-listener'
import LastFM from "last-fm";
import {api_key,userName,userAgent} from '../../helpers/api/config'

export default class LogoBlock extends Component{
  constructor() {
    super();

    this.state = {
      isPlaying:false,
      currentTrack:''
    };

    this.lastfm = new LastFM(api_key, {
      userAgent: userAgent
    });

    this.Listener = new SpotifyListener({
      name: userName,
      key: api_key,
      pollInterval: 5000, // (Milliseconds)
      trackCount: 1, // Capped at 50 by Last.fm
      callback: (res,err) => {
        if (err) return console.log(err);
        res.forEach(item => this.getFoundTracks(item))
      }
    });
  }

  getFoundTracks = ({name,artist}) => {
    console.log(`name = ${name}, artist = ${artist}`)
    console.log("check getFoundTracks");

    this.lastfm.search(
      { track: name,artist:artist, api_key: api_key,q:name },
      (err, data) => {
        if (data) {
          console.log('track found');
          console.log(data.result.tracks[0]);
          this.setState({
            currentTrack:data.result.tracks[0]
          });
        } else console.log(err);
      }
    );
  };


  callbackForPlaying = playingStatus => {
    if(playingStatus){
      console.log(`playingStatus is true`)
      this.Listener.startListening()
      this.setState({isPlaying: playingStatus})
    } else {
      console.log(`playingStatus is false`)
      this.Listener.stopListening()
      
    }

    this.setState({isPlaying: playingStatus})
  }

  render(){
    const {isPlaying} = this.state
    return (
      <div className="logo-main-wrapper">
        <div className="logo-first-half">
          <SmallImage />
          <Logo />
        </div>
        <div className="logo-second-half">
          <PlayButton callback={this.callbackForPlaying} isPlaying={isPlaying}/>
        </div>
      </div>
    )
  }
};

