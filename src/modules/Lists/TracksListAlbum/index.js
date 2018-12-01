import React, {Component, Fragment} from 'react'
import './TracksListAlbum.css'
import {
	compose,
	withHoverAnimation,
	withGroupAnimation,
} from '../../../libs/Animation'

import  {
	TrackBoxForAlbum
} from '../../Boxes'

const List = compose(withGroupAnimation, withHoverAnimation)(TrackBoxForAlbum)

export const TracksListAlbum = ({list, ...props}) => {
	//console.log(list)
	const childrensProps = list.map((el,id) => {
		return {
			...el,
			key: el.name + el.image[0],
			image: el.images[2], 
			trackName:el.name
		}})
	return(
		<List className='track-list' childrensProps={childrensProps} />
	)
}

