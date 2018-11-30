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

export const ArtistsList = ({ list ,image, name}) => {
  console.log('check ArtistsList')
  console.log(image)
  const listForPage = list.slice(0, 9).map((el) => {
  	return {
  		...el,
  		image:el.images[3],
  		key:el.name + el.artistsName
    }})
  return (
       <List name={name} image={image} className={ `artists-list` } childrensProps={listForPage}/>
  );
};

ArtistsList.defaultProps = {
  name: "test",
  image: "",
  list:[]
};

ArtistsList.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
};