import React, {Component} from "react";
import PropTypes from "prop-types";
import "./Album.css";
import {
    TitleH2,
    LinkItem,
    SearchField,
    FilterGenres
} from "../../components";
import { TracksListAlbum } from '../../modules'
import {listOfGenres} from '../../helpers/api/config'
import {getAlbumTracks} from "../../helpers/api"


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

    getTracks = (artistName, name) => {
        return getAlbumTracks( artistName, name, data => {
            if (data) {
                this.setState({
                    albumName: name,
                    artistName: artistName,
                    trackList: data.tracks,
                    image: data.images
                })
            }
        });
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
