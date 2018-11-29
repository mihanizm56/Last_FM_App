import React, {Fragment, Component} from 'react'
import './Main.css'
import  { 
	ArtistsList,
	MainTitleBlock,
	LogoBlock,
	TracksListChart 
} from '../../modules'
import {
	compose,
	withHoverAnimation,
	withGroupAnimation,
} from '../../libs/Animation'
import LastFM from 'last-fm'

import { 
	getTopArtists, 
	searchTracks, 
	getTagTopArtists
} from "../../helpers/api";
import {shuffle} from '../../helpers'

export class Main extends Component {
	state = {
		artistsList: [],
		trackList:[]
	}	
	constructor(props){
		super(props)
	}
	componentDidMount(){
		this.lastfm = new LastFM('659beef5a99f79b12854cc654f94b0d5')
		this.search()
		this.getArtists()
		setInterval(this.shuffle, 3000)
	}
	search = () => {
		this.lastfm.trackSearch({ q: 'the greatest' }, (err, data) => {
  			if (err) console.error(err)
  			else {
  				this.setState({trackList:data.result})
  			}
		})
	}
	shuffle = () => {
		this.setState({
			list:shuffle(this.state.artistsList)
		})
	}

	getArtists = () => {
    return getTopArtists(1, data => {
      if (data) {
        this.setState({
        	artistsList: data.result
        })
      }
    })
  };
	render(){
		return(
			<div className='main-page'>
				<MainTitleBlock name='ТОП 20 Артистов' linkName='Посмотреть всех' path='artists' className='border' />
				<div className='main-container top-artist-container'>
					<ArtistsList  list={this.state.artistsList} from={0} to={6} />
				</div>
				<MainTitleBlock name='Last FM Чарт' linkName='Посмотреть всех' path='tracks' className='border' />
				<div className='main-container w-95'>
					<TracksListChart className='main-tracks-list' list={this.state.trackList}/>
				</div> 
			</div>
		)
	}
}

