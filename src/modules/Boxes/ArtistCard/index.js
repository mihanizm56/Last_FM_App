import React from "react"
import "./ArtistCard.css"
import {
    MiddleImage,
    Paragraph,
    TitleH2
} from "../../../components";

export const ArtistCard = ({name, genre, image}) =>{
    return(
        <div className="artistCard">
            <div className="artistCard-image">
                <MiddleImage image={image}/>
            </div>
            <div className="artistCard-description">
                <TitleH2 name={name}/>
                <Paragraph name={genre}/>
            </div>
        </div>
    )
}
