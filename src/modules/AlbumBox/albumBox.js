import React from "react";
import PropTypes from "prop-types";
import "./albumBox.css";
import {Link} from "react-router-dom";

export const AlbumBox = ({artistName, name, image}) => {
    const imageForBlock = {
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${image})`
    };
    name = name.length > 20 ? name.slice(0, 10) + '...' : name
    return (
        <div className="artist-preview__block" style={imageForBlock}>
            <span>
                <Link to={{
                    pathname: `/album/${name}`,
                    search: `?artist=${artistName}&album=${name}`
                }}>
                    {name}
                    </Link>
            </span>
        </div>
    );
};

AlbumBox.defaultProps = {
    name: "",
    image: ""
};

AlbumBox.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};
