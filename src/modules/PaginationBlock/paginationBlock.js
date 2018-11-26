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
    console.log('check getButtons')
    const arrayOfButtons = getPagination(arrayOfArtists)
    return arrayOfButtons.map(element => {
        console.log(element.index + 1)
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
    { data: "test5" },
    { data: "test6" },
    { data: "test7" },
    { data: "test8" },
    { data: "test9" },
    { data: "test10" },
    { data: "test11" },
    { data: "test12" }
  ]
};

PaginationBlock.propTypes = {
  artistsList: PropTypes.array.isRequired,
  callbackForPagging:PropTypes.func.isRequired
};
