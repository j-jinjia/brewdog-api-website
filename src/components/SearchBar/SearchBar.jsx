import React from "react";
import "./SearchBar.scss";

const SearchBar = (props) => {
  const { label, searchTerm, handleInput } = props;

  return (
    <>
      <form className="searchBar">
        <label htmlFor={label}></label>
        <input
          className="searchBar__input"
          placeholder="Search by name"
          type="text"
          value={searchTerm}
          name={label}
          onInput={handleInput}
        />
      </form>
    </>
  );
};

export default SearchBar;
