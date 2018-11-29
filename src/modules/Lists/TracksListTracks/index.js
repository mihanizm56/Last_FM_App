import React, {Component, Fragment} from 'react'
import './TracksListTracks.css'
import {
	compose,
	withHoverAnimation,
	withGroupAnimation,
} from '../../../libs/Animation'

import  {
	TrackBoxForTracks
} from '../../Boxes'

const List = compose(withGroupAnimation, withHoverAnimation)(TrackBoxForTracks)

export const TracksListTracks = ({list, ...props}) => {
	const childrensProps = list.map((el,id) => {
		console.log(el)
		return {
			...el,
			key:el.name + el.images[0],
			image: el.images[2], 
			trackName:el.trackName,
		}})
	return(
		<List className='track-list' childrensProps={childrensProps} />
	)
}

