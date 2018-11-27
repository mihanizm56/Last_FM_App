import React, {Component, Fragment} from 'react'
import './trackList.css'
import {
	compose,
	withHoverAnimation,
	withGroupAnimation,
} from '../../libs/Animation'
import  {TrackForList} from '../../modules/TrackForList/trackForList'

const List = compose(withGroupAnimation, withHoverAnimation)(TrackForList)

const TracksList = ({childrensProps, ...props}) => {
	return(
		<List className='track-list' childrensProps={childrensProps}/>
	)
}

export default TracksList

