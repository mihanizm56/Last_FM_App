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
    LogoBlock, TracksListTracks
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
        trackList: []
    }

    componentDidMount() {
        const artistName = this.props.match.params.artist
        const albumName = this.props.match.params.album
        this.getTracks(artistName, albumName)
    }

    getTracks(artistName, albumName) {
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&artist=${artistName}&album=${albumName}&api_key=2e6aea0b83ca1a01fd8b7c2b3c12e707&format=json`)
            .then(response => (this.setState({
                albumName: albumName,
                artistName: artistName,
                trackList: response.data.album.tracks.track
            })))
    }

    render() {
        const {albumName, artistName, trackList} = this.state;
        const list = this.state.trackList.map((el, index) => {
            return {
                key: index + el.name,
                image: "",
                images: ['1', "2", "3", "4"],
                artistName: el.artist.name,
                ...el
            }
        })
        return (
            <div>
                <div className="album-main-wrapper">
                    <div className="album-main-firstHalf">
                        <TitleH2 name={albumName}/>
                        <LinkItem name={artistName}/>
                        <SearchField placeholder="Поиск композиции" style={this.styleSearch}/>
                    </div>
                    <div className="album-main-secondHalf">
                        <FilterGenres listOfGenres={listOfGenres}/>
                    </div>
                    {/* Вот сюда вставляй список */}
                </div>
                <TracksListTracks
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
