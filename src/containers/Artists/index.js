import React, {Component} from "react";
import {
    TitleH2,
    SearchField,
    FilterGenres,
} from "../../components";
import {
    ArtistsList,
    LogoBlock,
    PaginationBlock,
    ArtistCard
} from '../../modules'
import {Route, Switch} from 'react-router-dom'
import "./Artists.css";
import { listOfGenres } from '../../helpers/api/config'
import { getTopArtists, searchTracks, getTagTopArtists } from "../../helpers/api/index";
import { Artist } from '../Artist' 


class Artists extends Component {
  constructor() {
    super();

    this.state = {
      currentPage: 1,
      arrayListArtists: [],
      paginationIsVisible: true,
      tagIsSelected: false,
      findByWord: ''
    };
  }

  componentDidMount() {
    this.getArtists();
  }

  getArtists = (page = 1) => {
    return getTopArtists(page, data => {
      if (data) {
        if (data.result.length > 9) {
          return this.setState({
            ...this.state,
            arrayListArtists: data.result.slice(-9),
            currentPage: page,
            paginationIsVisible: true
          });
        } else
          return this.setState({
            ...this.state,
            arrayListArtists: data.result,
            currentPage: page,
            paginationIsVisible: true
          });
      }
    })
  };

  getFoundTracks = string => {
    if (string === '') return this.getArtists()
    const page = this.state.currentPage;
    searchTracks(string, page, data => {
      if (data) {
        this.setState({
          ...this.state,
          arrayListArtists: data.result.artists,
          paginationIsVisible: false,
          findByWord: string,
          tagIsSelected: false
        });
      }
    });
  };

  getNumberOfButton = page => {
    this.getArtists(page);
    this.setState({ ...this.state, currentPage: page });
  };

  getTagsItems = tag => {
    if (tag === "") return this.getFoundTracks(this.state.findByWord);

    let searchString = this.state.findByWord ? this.state.findByWord : "";
    let limit = this.state.findByWord ? 1000 : 100

    return getTagTopArtists(tag, limit, data => {
      if (data) {
        const preData = data.artist.filter(item => (item.name.toLowerCase().indexOf(searchString.toLowerCase()) >= 0));
        const newData = preData.map(item => {return {...item, artistsName: item.name, images:item.image}})
        this.setState({
          ...this.state,
          arrayListArtists: newData,
          paginationIsVisible: false,
          tagIsSelected: true
        });
      }
    })
  }

  render() {
    const { arrayListArtists, paginationIsVisible } = this.state;
    return <div className="artistsPage-wrapper">
      <div className="artistsPage">
        <div className="artistsPage-title">
          <TitleH2 name="Артисты" />
        </div>
        <div className="artistsPage-filters">
          <SearchField placeholder="Поиск артиста" callback={this.getFoundTracks} />
          <FilterGenres listOfGenres={listOfGenres} callback={this.getTagsItems} tagIsSelected={this.state.tagIsSelected} />
        </div>
      </div>
      <div className="artistsPage-artistsList">
        <ArtistsList list={arrayListArtists} />
      </div>
      {paginationIsVisible ? <div className="PaginationBlock-wrapper">
        <PaginationBlock artistsList={arrayListArtists} callbackForPagging={this.getArtists} />
      </div> : null}
         
    </div>
  }
}

const ArtistOrArtists = (props) => {
    return(
        <Switch>
            <Route exact path='/artists' component={Artists}/> 
            <Route  path='/artists/:name' component={Artist}/> 
        </Switch>
    )
}



export {
    ArtistOrArtists as Artists
}