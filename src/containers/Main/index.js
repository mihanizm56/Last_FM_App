import React, {Fragment, Component} from 'react'
import './Main.css'
import  { 
	ArtistsList,
	MainTitleBlock,
	LogoBlock,
	TrackBoxForTracks
} from '../../modules'
import {
	compose,
	withHoverAnimation,
	withGroupAnimation,
} from '../../libs/Animation'
import LastFM from 'last-fm'

const List = compose(withGroupAnimation, withHoverAnimation)(TrackBoxForTracks)

const s = array => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex = 0;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};
 
export class Main extends Component {
	state = {
		list: [...Array(14).keys()],
		trackList:[]
	}	
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
  				this.setState({trackList:data.result})
  			}
		})
	}
	shuffle(){
		this.setState({
			list:s(this.state.list),
			//trackList:s(this.state.trackList)
		})
	}
	render(){
		const childrensProps = this.state.trackList.map((el) => {return {key:el.name + el.artistName + el.images[0], image:el.images[0], ...el}})
		const artistList = this.state.list.map(el => {return {key:el, ...el}})
		return(
			<div className='main-page'>
				<MainTitleBlock name='ТОП 20 Артистов' linkName='Посмотреть всех' path='artists' className='border' />
				<div className='main-container top-artist-container'>
					<ArtistsList  list={artistList} from={0} to={6} />
				</div>
				<MainTitleBlock name='Last FM Чарт' linkName='Посмотреть всех' path='tracks' className='border' />
				<div className='main-container w-95'>
					<List className='main-tracks-list' childrensProps={childrensProps}/>
				</div> 
			</div>
		)
	}
}

