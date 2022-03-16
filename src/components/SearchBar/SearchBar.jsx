import React from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <>
      <div className="searchBar">
        <label htmlFor="search"></label>
        <input
          classname="searchBar__input"
          type="text"
          name="search"
          id="searchbar"
        />
      </div>
    </>
  );
};

export default SearchBar;
