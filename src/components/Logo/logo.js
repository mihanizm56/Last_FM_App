import React from "react";
import { Link } from "react-router-dom";
import './logo.css'
import { withPressAnimation } from '../../libs/Animation'

export const Logo = withPressAnimation(() => <Link className='Logo' to='/main'>Logo</Link>)
