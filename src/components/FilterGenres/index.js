import React from "react";
import PropTypes from "prop-types";

import "./FilterGenres.css";

export const FilterGenres = ({ callback, listOfGenres, tagIsSelected }) => {
  let _select = React.createRef();
  return (
    <select className='select-filter-genres' ref={input => (_select = input)} onChange={() => callback(_select.value)}>
      <option defaultValue selected={!tagIsSelected} value="" />
      {
        listOfGenres.map((element, index) => <option key={index} value={element}>{element}</option>)
      }
    </select>
  )
};

FilterGenres.defaultProps = {
  callback: function () { alert('callback is undefined') },
  listOfGenres: [],
  tagIsSelected: false
};

FilterGenres.propTypes = {
  callback: PropTypes.func.isRequired,
  listOfGenres: PropTypes.array.isRequired,
  tagIsSelected: PropTypes.bool.isRequired
};