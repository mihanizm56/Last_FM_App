import React, {Component, Fragment} from 'react'
import './TracksListChart.css'
import {
	compose,
	withHoverAnimation,
	withGroupAnimation,
} from '../../../libs/Animation'

import  {
	TrackBoxForChart
} from '../../Boxes'

const List = compose(withGroupAnimation, withHoverAnimation)(TrackBoxForChart)

export const TracksListChart = ({list, ...props}) => {
	const childrensProps = list.map((el,id) => {
		return {
			...el,
			key:el.name + el.images[0],
			image: el.images[2], 
			trackName: el.name,
		}})
	return(
		<List className='track-list' childrensProps={childrensProps} />
	)
}

