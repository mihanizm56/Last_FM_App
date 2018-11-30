import React, {Component} from "react";
import PropTypes from "prop-types";
import "./Album.css";
import {
    TitleH2,
    LinkItem,
    SearchField,
    FilterGenres
} from "../../components";
import {
    LogoBlock, TracksListAlbum
} from '../../modules'
import {listOfGenres} from '../../helpers/api/config'
import axios from "axios"
import LastFM from 'last-fm'

export class Album extends Component {
    
    constructor() {
        super()

        this.styleSearch = {
            marginTop: "40px"
        };
    }

    state = {
        albumName: '',
        artistName: '',
        trackList: [],
        image:[]
    }

    componentDidMount() {
        const artistName = this.props.match.params.artist
        const albumName = this.props.match.params.album
        this.getTracks(artistName, albumName)
    }

    // getTracks(artistName, albumName) {
    //     axios.get(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&artist=${artistName}&album=${albumName}&api_key=2e6aea0b83ca1a01fd8b7c2b3c12e707&format=json`)
    //         .then(response => {
    //             this.setState({
    //             albumName: albumName,
    //             artistName: artistName,
    //             trackList: response.data.album.tracks.track,
    //             image:response.data.album.image
    //         })})
    //
    // }

    getTracks(artistName, albumName) {
        this.lastfm.albumInfo({ artistName,albumName }, (err, data) => {
            if (err) console.error(err)
            else {
                console.log(data)
                //this.setState({trackList:data.result})
            }
        })
    }

    render() {
        const {albumName, artistName, image} = this.state;
        const updateimages = image.map((item)=>{
            return item['#text']
        })
        const list = this.state.trackList.map((el, index) => {
            return {
                key: index + el.name,
                image: "",
                images: updateimages,
                ...el
            }
        })
        const path = `artists/${artistName}`
        return (
            <div>
                <div className="album-main-wrapper">
                    <div className="album-main-firstHalf">
                        <TitleH2 name={albumName}/>
                        <LinkItem
                            name={artistName}
                            path={path}
                        />
                        <SearchField placeholder="Поиск композиции" style={this.styleSearch}/>
                    </div>
                    <div className="album-main-secondHalf">
                        <FilterGenres listOfGenres={listOfGenres}/>
                    </div>
                </div>
                <TracksListAlbum
                    list={list}
                />
            </div>
        )
    }
};

Album.defaultProps = {
    albumName: "test Album",
    artistName: "test artist-name"
};

Album.propTypes = {
    albumName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired
};
