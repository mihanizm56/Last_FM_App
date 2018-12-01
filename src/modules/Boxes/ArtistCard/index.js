import React from "react"
import "./ArtistCard.css"
import {
    MiddleImage,
    //Paragraph,
    TitleH2
} from "../../../components";
// import {ArtistBox} from "../ArtistBox";
import PropTypes from "prop-types";

export const ArtistCard = ({name, image}) =>{
    return(
        <div className="artistCard">
            <div className="artistCard-image">
                <MiddleImage image={image}/>
            </div>
            <div className="artistCard-description">
                <TitleH2 name={name}/>
            </div>
        </div>
    )
}

ArtistCard.defaultProps = {
    name: "",
    image: ""
};

ArtistCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};
