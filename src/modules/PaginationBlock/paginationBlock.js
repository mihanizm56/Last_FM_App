import React from "react";
import PropTypes from "prop-types";
import "./paginationBlock.css";
import { getPagination } from "../../helpers/index";
import { PaginationButton } from "../../components/PaginationButton/paginationButton";

export const PaginationBlock = ({ artistsList,callbackForPagging }) => {
  return (
    <div className="pagination-wrapper">
      { getButtons(artistsList,callbackForPagging) }
    </div>
  );
};

const getButtons = (arrayOfArtists,callback) => {
    const arrayOfButtons = getPagination(arrayOfArtists)
    return arrayOfButtons.map(element => {
        return(
            <PaginationButton key={element.index} from={element.from} to={element.to} callback={callback} number={`${element.index + 1}`}/>
        )
    })
};

PaginationBlock.defaultProps = {
  artistsList: [
    { data: "test1" },
    { data: "test2" },
    { data: "test3" },
    { data: "test4" },
    { data: "test5" }
  ]
};

PaginationBlock.propTypes = {
  artistsList: PropTypes.array.isRequired,
  callbackForPagging:PropTypes.func.isRequired
};
