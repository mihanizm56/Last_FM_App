import React, { Component } from "react";
import ArtistCard from "../../modules/ArtistCard/artistCard";
import "./artist.css";
import LastFM from "last-fm";
import {AlbumList} from "../../modules/AlbumList/albumList";
import {TrackList} from "../../modules/TracksList/trackList";

const API_KEY = `659beef5a99f79b12854cc654f94b0d5`

class Artist extends Component {
    state = {
        artistInfo: {},
        topAlbums:[],
        topTracks:[]
    }

    componentDidMount(){
        this.lastfm = new LastFM(API_KEY)
        this.getArtistInfo()
    }

    getArtistInfo(name = "Tree days grace"){
        this.lastfm.artistInfo({name, API_KEY}, (err, data) => {
            if (err) console.error(err)
            else {
                console.log(data)
                const newArtistInfo = {name: data.name, image: data.images[1]}
                this.lastfm.artistTopAlbums({name, API_KEY}, (err, data) => {
                    if (err) console.error(err)
                    else {
                        console.log(data.result)
                        const topAlbum = data.result
                        this.lastfm.artistTopTracks({name, API_KEY}, (err, data) => {
                            if (err) console.error(err)
                            else {
                                console.log(data.result)
                                this.setState({
                                    topAlbums: topAlbum,
                                    artistInfo: newArtistInfo,
                                    topTracks: data.result})
                            }
                        })
                    }
                })
            }
        })
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
                <TrackList
                    list={this.state.topTracks}
                />
            </div>
        );
    }
}

export default Artist
