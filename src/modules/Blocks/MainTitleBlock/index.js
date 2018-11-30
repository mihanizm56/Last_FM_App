import React from 'react'
import { 
	TitleH2, 
	LinkItem  
} from "../../../components";
import './MainTitleBlock.css'
import {
	withEnterExitAnimation
} from '../../../libs/Animation'
import {TrackBoxForAlbum} from "../../Boxes/TrackBoxForAlbum";
import PropTypes from "prop-types";

export const MainTitleBlock =({name, linkName, path, className,...props}) => {
	return (
		<div className={`main-title-block  ${className}`} {...props}> 
			<TitleH2 name={name} />
			<LinkItem name={linkName} path={path} />
		</div>
	)
}

MainTitleBlock.propTypes = {
    name: PropTypes.string.isRequired,
    linkName: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
};


