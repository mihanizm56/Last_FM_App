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
  const listForPage = list.slice(0, 9).map(element => {
  	return {
  		...element,
  		image:element.images[3],
  		key:element.name + element.artistsName
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