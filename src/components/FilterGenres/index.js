import React from "react";
import PropTypes from "prop-types";
import "./FilterGenres.css";

export const FilterGenres = ({ callback, listOfGenres, tagIsSelected, nameOfTag }) => {
  let _select = React.createRef();
  return (
    <select className='select-filter-genres' value={tagIsSelected ? nameOfTag : ''} ref={input => (_select = input)} onChange={() => callback(_select.value)}>
      <option value=''/>
      {
        listOfGenres.map((element, index) => <option key={index} value={element}>{element}</option>)
      }
    </select>
  )
};

FilterGenres.defaultProps = {
  callback: function () { alert('callback is undefined') },
  listOfGenres: [],
  tagIsSelected: false,
  nameOfTag:''
};

FilterGenres.propTypes = {
  callback: PropTypes.func.isRequired,
  listOfGenres: PropTypes.array.isRequired,
  tagIsSelected: PropTypes.bool.isRequired,
  nameOfTag: PropTypes.string.isRequired
};