import React,{Component} from "react"
import {Logo} from "../../components/Logo/logo"
import {TitleH2} from "../../components/TitleH2/title"
import {SearchField} from "../../components/SearchField/searchField"
import {FilterGenres} from "../../components/FilterGenres/filterGenres"
import {ArtistBox} from "./../ArtistBox/artistBox"
import axios from "axios"

const API_KEY = '2e6aea0b83ca1a01fd8b7c2b3c12e707'

class ArtistsPage extends Component {
    componentDidMount(){
        axios.get("")
            .then(response=>console.log(response))
    }
    state = {
        artistsList: null,
        genresList: null
    }
    render(){
        return(
            <>
                <Logo/>
                <div>
                    <TitleH2 name="Артисты"/>
                    <SearchField placeholder="Поиск артиста"/>
                    <FilterGenres/>
                </div>
            </>
        )
    }
}

export default ArtistsPage

