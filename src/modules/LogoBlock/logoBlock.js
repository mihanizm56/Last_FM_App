import React,{Component} from "react";
// import PropTypes from "prop-types";
import "./logoBlock.css";
import { SmallImage } from "../../components/SmallImage/smallImage";
import { Logo } from "../../components/Logo/logo";
import { PlayButton } from "../../components/PlayButton/playButton";

export default class LogoBlock extends Component{
  state={
    isPlaying:false
  }

  callbackForPlaying = playingStatus => {
    this.playMusic(playingStatus)
    this.setState({isPlaying: playingStatus})
  }

  playMusic = status => {
    console.log(`status = ${status}`)
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

