import React from "react";
import PropTypes from "prop-types";
import "./searchField.css";

const SearchFiled = (props) => {
    return (
        <div>
            <div className="form-group">
                <input
                    className="form-control" 
                    value={props.search}
                    onChange={props.searchHandler}/>
            </div>
        </div>
    );
};


SearchFiled.propTypes = {
    search: PropTypes.string.isRequired,
    searchHandler: PropTypes.func.isRequired

};

export default SearchFiled;