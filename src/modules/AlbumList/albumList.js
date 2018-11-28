import React from "react";
import { ArtistBox } from "./../ArtistBox/artistBox";
import PropTypes from "prop-types";
import "./albumList.css"

export const AlbumList = ({ list }) => {
    return (
        <div className="AlbumList">
            {list.map((item, index) => (
                <ArtistBox key={index} name={item.name} image={item.images[2]} />
            ))}
        </div>
    );
};

AlbumList.defaultProps = {
    list:[]
};

AlbumList.propTypes = {
    list: PropTypes.array.isRequired
};
