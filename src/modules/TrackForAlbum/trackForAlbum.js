import React from "react";
import PropTypes from "prop-types";
import "./trackForAlbum.css";

import { SmallImage } from "../../components/SmallImage/smallImage";
import { Paragraph } from "../../components/Paragraph/paragraph";
import { LinkItem } from "../../components/LinkItem/linkItem";

export const TrackForAlbum = ({ image, trackName,genreName }) => {
  return (
    <div className="trackAlbum-wrapper">
      <div className="trackAlbum-first-half">
        <SmallImage image={image}/>
      </div>
      <div className="trackAlbum-second-half">
        <Paragraph name={trackName}/>
        <LinkItem name={genreName}/>
      </div>
    </div>
  );
};

TrackForAlbum.propTypes = {
  image: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
  genreName: PropTypes.string.isRequired
};
