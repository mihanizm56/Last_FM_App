import React, {Component, Fragment} from 'react'
import './TracksList.css'
import {
	compose,
	withHoverAnimation,
	withGroupAnimation,
} from '../../../libs/Animation'

import  {
	TrackBoxForTracks
} from '../../Boxes'

const List = compose(withGroupAnimation, withHoverAnimation)(TrackBoxForTracks)

export const TracksList = ({childrensProps, ...props}) => {
	return(
		<List className='track-list' childrensProps={childrensProps} />
	)
}

