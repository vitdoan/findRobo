import React from "react";

function SearchBox(props){
    return <div className="pa2">
    <input onChange={props.searchInput} className="pa3 ba bg-light-green" type="search" placeholder="Search Robots" />
    </div>
}

export default SearchBox;