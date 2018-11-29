import React from 'react'
import { 
	TitleH2, 
	LinkItem  
} from "../../../components";
import './MainTitleBlock.css'
import {
	withEnterExitAnimation
} from '../../../libs/Animation'

export const MainTitleBlock =({name, linkName, path, className,...props}) => {
	return (
		<div className={`main-title-block  ${className}`} {...props}> 
			<TitleH2 name={name} />
			<LinkItem name={linkName} path={path} />
		</div>
	)
}