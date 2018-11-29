import React, {Fragment, Component} from 'react'
import './Tracks.css'
import { Route } from 'react-router'
import  { 
	TracksTitleBlock, 
	TracksList,
	LogoBlock
} from '../../modules'
import LastFM from 'last-fm'
import {s} from '../../helpers'

const Page = ({childrensProps, ...props}) => {
	return(
		<Fragment>
			<TracksTitleBlock/>
			<TracksList  childrensProps={childrensProps}/>
		</Fragment>
	)
}


export class Tracks extends Component {
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
		const list = this.state.list.map((el) => {return {key:el.images[0] + el.name, image:el.images[0], ...el}})
		return(
			<Page childrensProps={list}/>
		)
	}
}

