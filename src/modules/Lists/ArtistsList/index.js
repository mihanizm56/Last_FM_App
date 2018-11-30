import React from "react";
import { ArtistBox } from "../../Boxes";
import PropTypes from "prop-types";
import "./ArtistsList.css"
import {
  compose,
  withGroupAnimation,
  withHoverAnimation
} from '../../../libs/Animation'

const List = compose(withGroupAnimation, withHoverAnimation)(ArtistBox)

export const ArtistsList = ({ from, to, list , className, ...props}) => {
  const listForPage = list.slice(from, to).map((el) => {
  	return {
  		...el,
  		image:el.images[3],
  		key:el.name + el.artistsName
  	}})
  return (
       <List {...props} className={ `artists-list ${className}` } childrensProps={listForPage}/>
  );
};

