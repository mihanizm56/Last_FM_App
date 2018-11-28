import React from "react";
import PropTypes from "prop-types";
import "./trackList.css"
import {TrackForChart} from "../TrackForChart/trackForChart";

export const TrackList = ({ list }) => {
    return (
        <div className="TrackList">
            {list.map((item, index) => (
                <TrackForChart key={index} artistName={item.artistName} trackName={item.name} image={item.images[2]} />
            ))}
        </div>
    );
};

TrackList.defaultProps = {
    list:[]
};

TrackList.propTypes = {
    list: PropTypes.array.isRequired
};
