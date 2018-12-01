import React from 'react'
import { 
	TitleH2, 
	LinkItem  
} from "../../../components";
import './MainTitleBlock.css'
// import {
// 	withEnterExitAnimation
// } from '../../../libs/Animation'
// import {TrackBoxForAlbum} from "../../Boxes/TrackBoxForAlbum";
import PropTypes from "prop-types";

export const MainTitleBlock =({name, linkName, path, className}) => {
	return (
		<div className={`main-title-block  ${className}`} > 
			<TitleH2 name={name} />
			<LinkItem name={linkName} path={path} />
		</div>
	)
}

MainTitleBlock.defaultProps = {
    name: '',
    linkName: '',
	path: '',
	className: ''
};

MainTitleBlock.propTypes = {
    name: PropTypes.string.isRequired,
    linkName: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired
};


