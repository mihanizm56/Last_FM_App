import React, { Component } from "react";
import "./Artist.css";
import LastFM from "last-fm";
import {
    TracksListTracks, 
    AlbumList, 
    ArtistCard
} from "../../modules";

const API_KEY = `659beef5a99f79b12854cc654f94b0d5`

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
        this.lastfm = new LastFM(API_KEY)
        this.getArtistInfo(this.props.match.params.name)
        this.getArtistTopAlbums(this.props.match.params.name)
    }

    getArtistInfo(name = "Tree days grace"){
        this.lastfm.artistInfo({name, API_KEY}, (err, data) => {
            if (err) console.error(err)
            else {
                const newArtistInfo = {name: data.name, image: data.images[1], genre:data.tags.splice(2).join(', ')}
                this.lastfm.artistTopTracks({name, API_KEY}, (err, data) => {
                    if (err) console.error(err)
                    else {
                        this.setState({
                            artistInfo: newArtistInfo,
                            topTracks: data.result
                        })
                    }
                })
            }
        })
    }

    getArtistTopAlbums(name = "Tree days grace"){
        this.lastfm.artistTopAlbums({name, API_KEY}, (err, data) => {
            if (err) console.error(err)
            else {
                this.setState({topAlbums: data.result})
            }
        })
    }

    render() {
        return (
            <div className="artistPage">
                <ArtistCard
                    name={this.state.artistInfo.name}
                    genre={this.state.artistInfo.genre}
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


