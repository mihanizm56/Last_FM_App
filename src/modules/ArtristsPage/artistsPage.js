import React,{Component} from "react"
import {LogoBlock} from "./../LogoBlock/logoBlock"
import {TitleH2} from "../../components/TitleH2/title"
import {SearchField} from "../../components/SearchField/searchField"
import {FilterGenres} from "../../components/FilterGenres/filterGenres"
import {ArtistBox} from "./../ArtistBox/artistBox"
import "./artistsPage.css"
import axios from "axios"

const API_KEY = '2e6aea0b83ca1a01fd8b7c2b3c12e707'

class ArtistsPage extends Component {
    componentDidMount(){
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json`)
            .then(response=>console.log(response))
    }
    state = {
        artistsList: null,
        genresList: null
    }
    render(){
        return(
            <>
                <div className="artistsPage">
                    <div className="artistsPage-title">
                        <TitleH2 name="Артисты"/>
                    </div>
                    <div className="artistsPage-filters">
                        <SearchField placeholder="Поиск артиста"/>
                        <FilterGenres/>
                    </div>
                </div>
            </>
        )
    }
}

export default ArtistsPage

