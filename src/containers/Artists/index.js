import React, {Component} from "react";
import {
    TitleH2,
    SearchField,
    FilterGenres,
} from "../../components";
import {
    ArtistsList,
    LogoBlock,
    PaginationBlock
} from '../../modules'
import "./Artists.css";
import {s} from '../../helpers'
import LastFM from 'last-fm'

export class Artists extends Component {
    state = {
        from: 0,
        to: 9,
        list: [...Array(15).keys()],
    };
    getPropsForSlice = array => {
        this.setState({from: array[1], to: array[2]});
    };
    constructor(props){
        super(props)
        this.search = this.search.bind(this)
        this.shuffle = this.shuffle.bind(this)
    }
    componentDidMount(){
        this.lastfm = new LastFM('659beef5a99f79b12854cc654f94b0d5')
        this.search()
        setInterval(this.shuffle, 3000)
    }
    search(){
        this.lastfm.trackSearch({ q: 'the greatest' }, (err, data) => {
            if (err) console.error(err)
            else {
                this.setState({list:data.result})
            }
        })
    }
    shuffle(){
        this.setState({
            list:s(this.state.list),
        })
    }
    render() {
        const arrayListArtists = this.state.list.map((el,id) => {return { key:id, ...el}});
        const {from, to} = this.state;
        return (
            <div className='artistsPage-container'>
                <LogoBlock/>
                <div className="artistsPage">
                
                    <div className="artistsPage-title">
                        <TitleH2 name="Артисты"/>
                    </div>
                    <div className="artistsPage-filters">
                        <SearchField placeholder="Поиск артиста"/>
                        <FilterGenres/>
                    </div>
                </div>
                <div className="artistsPage-artistsList">
                    <ArtistsList list={arrayListArtists} from={from} to={to}/>
                     <PaginationBlock
                    artistsList={arrayListArtists}
                    callbackForPagging={this.getPropsForSlice}
                    />
                </div>
            </div>
        );
    }
}
