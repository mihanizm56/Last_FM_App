import React from "react";
import PropTypes from "prop-types";
import "./TrackBoxForAlbum.css";

import { 
  SmallImage,
  Paragraph,
  LinkItem  
} from "../../../components";

export const TrackBoxForAlbum = ({ image, trackName,genreName }) => {
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

TrackBoxForAlbum.propTypes = {
  image: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
  genreName: PropTypes.string.isRequired
};
