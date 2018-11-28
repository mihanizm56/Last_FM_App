import React from "react"
import {TitleH2} from "../../components/TitleH2/title";
import {Paragraph} from "../../components/Paragraph/paragraph";
import "./artistCard.css"
import {MiddleImage} from "../../components/MiddleImage/middleImage";

const artistCard = ({name, genre, image}) =>{
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

export default artistCard