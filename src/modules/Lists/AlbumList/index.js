import React, {Component, Fragment} from 'react'
import './AlbumList.css'
import PropTypes from 'prop-types'
import {
	compose,
	withHoverAnimation,
	withGroupAnimation,
} from '../../../libs/Animation'

import  {
	AlbumBox
} from '../../Boxes'

const List = compose(withGroupAnimation, withHoverAnimation)(AlbumBox)

export const AlbumList = ({list, ...props}) => {
	const childrensProps = list.map((el,id) => {return {key:id, image: el.images[3], ...el}})

	return(
		<List {...props} className='album-list' childrensProps={childrensProps} />
	)
}

AlbumList.defaultProps = {
    list:[]
};

AlbumList.propTypes = {
    list: PropTypes.array.isRequired
};
