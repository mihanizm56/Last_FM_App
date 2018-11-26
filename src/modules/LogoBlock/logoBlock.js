import React from "react";
import PropTypes from "prop-types";
import "./logoBlock.css";
import { SmallImage } from "../../components/SmallImage/smallImage";
import { Logo } from "../../components/Logo/logo";
import { PlayButton } from "../../components/PlayButton/playButton";

export const LogoBlock = ({ isPlaying, callbackForPlaying }) => {
  return (
    <div className="logo-main-wrapper">
      <div className="logo-first-half">
        <SmallImage />
        <Logo />
      </div>
      <div className="logo-second-half">
        <PlayButton callback={callbackForPlaying} isPlaying={isPlaying}/>
      </div>
    </div>
  );
};

LogoBlock.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    callbackForPlaying: PropTypes.func.isRequired
};
