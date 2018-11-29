import React from "react";
import { AlbumBox } from "./../AlbumBox/albumBox";
import PropTypes from "prop-types";
import "./albumList.css"

export const AlbumList = ({ list }) => {
    return (
        <div className="AlbumList">
            {list.map((item, index) => (
                <AlbumBox key={index} name={item.name} image={item.images[2]} artistName={item.artistName} />
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
