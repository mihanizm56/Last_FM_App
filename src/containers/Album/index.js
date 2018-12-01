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

const API_KEY = "2e6aea0b83ca1a01fd8b7c2b3c12e707"

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
        this.lastfm = new LastFM(API_KEY)
        const artistName = this.props.match.params.artist
        const albumName = this.props.match.params.album
        this.getTracks(artistName, albumName)
    }


    getTracks(artistName, name) {
        this.lastfm.albumInfo({ artistName,name }, (err, data) => {
            if (err) console.error(err)
            else {
                console.log(data)
                this.setState({
                    albumName: name,
                    artistName: artistName,
                    trackList: data.tracks,
                    image: data.images
                })
            }
        })
    }

    render() {
        const {albumName, artistName, image} = this.state;
        const updateimages = [...image]
        const list = this.state.trackList.map((el, index) => {
            return {
                ...el,
                key: index + el.name,
                image: "",
                images: updateimages,

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
