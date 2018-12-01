import React, {Component} from "react";
import PropTypes from "prop-types";
import "./Album.css";
import {
    TitleH2,
    LinkItem,
    SearchField,
    // FilterGenres
} from "../../components";
import {
    LogoBlock, TracksListAlbum, AlbumTitleBlock
} from '../../modules'
import {listOfGenres} from '../../helpers/api/config'
import {getAlbumTracks} from "../../helpers/api"
// import {listOfGenres} from '../../helpers/api/config'

export class Album extends Component {
    
    constructor() {
        super()
    }

    state = {
        albumName: '',
        artistName: '',
        trackList: [],
        image:[],
        inputTrackName: ''
    }

    componentDidMount() {
        const artistName = this.props.match.params.artist
        const albumName = this.props.match.params.album
        this.getTracks(artistName, albumName)
    }

    getTracks = (artistName, name) => {
        return getAlbumTracks( artistName, name, data => {
            if (data) {
                const tracks = data.tracks.map((el, index) => {
                    return {
                        ...el,
                        key: index + el.name,
                        image: "",
                        images: data.images
                    }
                })
                this.setState({
                    albumName: name,
                    artistName: artistName,
                    trackList: tracks,
                    image: data.images
                })
            }
        });
    }

    changeTrackName = (track) =>{
        this.setState({
            inputTrackName: track
        })
    }

    getList = () =>{
        let track = this.state.inputTrackName
        if (track === ""){
            return this.state.trackList
        }
        else{
            let trackName = track.toLowerCase()
            return this.state.trackList.filter((item)=>{
                return item.name.toLowerCase().indexOf(trackName) !== -1
            })

        }

    }

    render() {
        const {albumName, artistName} = this.state;

        const path = `artists/${artistName}`
        return (
            <div>

                <AlbumTitleBlock 
                    listOfGenres = {listOfGenres}
                    albumName = {albumName}
                    path = {path}
                    artistName = {artistName}/>

                <TracksListAlbum
                    list={this.getList()}
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
