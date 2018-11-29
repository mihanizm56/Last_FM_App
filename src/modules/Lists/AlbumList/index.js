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

export const AlbumList = ({childrensProps, ...props}) => {
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
