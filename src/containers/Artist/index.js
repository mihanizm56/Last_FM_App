import React, { Component } from "react";
import "./Artist.css";
import LastFM from "last-fm";
import {
    TracksListTracks, 
    AlbumList, 
    ArtistCard
} from "../../modules";
import {getArtistTopAlbums, getArtistInfo, getArtistTopTracks} from "../../helpers/api"

export class Artist extends Component {
    state = {
        artistInfo: {},
        topAlbums:[],
        topTracks:[]
    }

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.getArtistInfo(this.props.match.params.name)
        this.getArtistTopAlbums(this.props.match.params.name)
    }

    getArtistInfo = (name) =>{
        return getArtistInfo( name, data => {
            if (data) {
                const newArtistInfo = {name: data.name, image: data.images[1]}
                return getArtistTopTracks(name, data => {
                    if (data) {
                        this.setState({
                            artistInfo: newArtistInfo,
                            topTracks: data.result
                        })
                    }
                });
            }
        })
    }

    getArtistTopAlbums = (name) => {
        return getArtistTopAlbums( name, data => {
            if (data) {
                this.setState({topAlbums: data.result})
            }
        });
    }

    render() {
        return (
            <div className="artistPage">
                <ArtistCard
                    name={this.state.artistInfo.name}
                    genre="Artistgenre"
                    image={this.state.artistInfo.image}
                />
                <AlbumList
                    list={this.state.topAlbums}
                />
                <TracksListTracks
                    list={this.state.topTracks}
                />
            </div>
        );
    }
}

/*

  <TracksListTracks
                    list={this.state.topTracks}
                />
      
                <AlbumList
                    list={this.state.topAlbums}
                />
                <TracksList
                    list={this.state.topTracks}
                />


*/

