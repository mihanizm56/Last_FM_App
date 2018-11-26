import React from "react"
import {ArtistBox} from "./../ArtistBox/artistBox"

const artistsList = (props) =>{
    const listForPage = props.list.slice(props.from,props.to)
    return (
        <div>
            {listForPage.map((item) =>{
                return <ArtistBox
                            name="Name"
                            image="/"
                        />
            })}
        </div>
    )
}

export default artistsList