import React from "react"
import "./ArtistCard.css"
import {
    MiddleImage,
    Paragraph,
    TitleH2,
    BounceLoading
} from "../../../components";
import {
    withEnterExitAnimation
} from '../../../libs/Animation'
import {
    isEmpty
} from '../../../helpers'

const ArtistCard = withEnterExitAnimation(({name, genre, image}) =>{
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
})

export const AnimatedArtistCard = (props) => {
    const condition = !isEmpty(props.name && props.genre && props.image);
    return (
        <ArtistCard is={condition} {...props}/> 
    )
}


export {
    AnimatedArtistCard as ArtistCard
}