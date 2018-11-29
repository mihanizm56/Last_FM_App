import React from "react";
import { Link } from "react-router-dom";
import './Logo.css'
import { 
	withPressAnimation 
} from '../../libs/Animation'

export const Logo = withPressAnimation(() => <Link className='Logo' to='/'>Logo</Link>)
