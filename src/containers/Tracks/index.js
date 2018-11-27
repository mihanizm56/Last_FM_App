import React, {Fragment, Component} from 'react'
import { BrowserRouter, Link, Route} from "react-router-dom";
import './Tracks.css'
import  TracksList from '../../modules/TracksList'
import  {LogoBlock} from '../../modules/LogoBlock/logoBlock'
import  {SongsBigBlock} from '../../modules/SongsBigBlock/songsBigBlock'
import {
	compose,
	Draggable,
	withHoverAnimation,
	withFocusAnimation, 
	withPressAnimation,
	withEnterExitAnimation, 
	withEventAnimation, 
	withGroupAnimation,
	withRouteAnimation,
	withPageAnimation

} from '../../libs/Animation'
import LastFM from 'last-fm'


const Page = withPageAnimation(({childrensProps, onChange, ...props}) => {
	return(
		<Fragment>
			<LogoBlock/>
			<SongsBigBlock/>
			<TracksList childrensProps={childrensProps}/>
		</Fragment>
	)
})

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

const AnimatedPage = withRouteAnimation(({childrensProps}) => <Route render={(props) => <Page childrensProps={childrensProps} />} key='asfasf'/>)

class Tracks extends Component {
	state = {
		list: []
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
  				this.setState({list:data.result})
  			}
		})
	}
	shuffle(){
		this.setState({
			list:s(this.state.list)
		})
	}
	render(){
		const list = this.state.list.map((el) => {return {key:el.name + el.artistName, image:el.images[0], ...el}})
		return(
			<BrowserRouter>
				<Fragment>
					<AnimatedPage childrensProps={list} />
				</Fragment>
			</BrowserRouter>
		)
	}
}

export default Tracks
