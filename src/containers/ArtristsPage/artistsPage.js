import React,{Component} from "react"
import {TitleH2} from "../../components/TitleH2/title"
import {SearchField} from "../../components/SearchField/searchField"
import {FilterGenres} from "../../components/FilterGenres/filterGenres"
import ArtistsList from "../../modules/ArtistsList/artistsList"
import "./artistsPage.css"

class ArtistsPage extends Component {
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
                    <ArtistsList
                        list={[1,2,3,4]}
                        from = {0}
                        to={2}
                    />
                </div>
            </>
        )
    }
}

export default ArtistsPage

