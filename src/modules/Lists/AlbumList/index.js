import React, {Component, Fragment} from 'react'
import './AlbumList.css'
import PropTypes from 'prop-types'
import {
	compose,
	withHoverAnimation,
	withGroupAnimation,
} from '../../../libs/Animation'

import  {
	ArtistBox
} from '../../Boxes'

const List = compose(withGroupAnimation, withHoverAnimation)(ArtistBox)

export const AlbumList = ({list, ...props}) => {
	const childrensProps = list.map((el,id) => {return {key:id, image: el.images[3], ...el}})
	return(
		<List className='album-list' childrensProps={childrensProps} />
	)
}

AlbumList.defaultProps = {
    list:[]
};

AlbumList.propTypes = {
    list: PropTypes.array.isRequired
};
