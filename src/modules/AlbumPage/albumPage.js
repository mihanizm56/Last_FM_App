import React, { Component } from "react";
import PropTypes from "prop-types";
import "./albumPage.css";
import { AlbumBigBlock } from "../AlbumBigBlock/albumBigBlock";

export class AlbumPage extends Component {
  componentDidMount() {
    console.log("test Album");
  }
  render() {
    return (
      <div className="album-wrapper">
        <AlbumBigBlock />
      </div>
    );
  }
}

// AlbumPage.propTypes = {
//     isPlaying: PropTypes.bool.isRequired,
//     callbackForPlaying: PropTypes.func.isRequired
// };
