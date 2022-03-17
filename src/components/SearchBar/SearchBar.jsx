import React from "react";
import "./SearchBar.scss";
import { FcSearch } from "react-icons/fc";

const SearchBar = (props) => {
  const { label, searchTerm, handleInput } = props;

  return (
    <>
      <form className="searchBar">
        <label htmlFor={label}>
          <FcSearch />
        </label>

        <input
          className="searchBar__input"
          placeholder="Search by name"
          type="text"
          value={searchTerm}
          name={label}
          onInput={handleInput}
          autoFocus
          tabIndex="1"
        />
      </form>
    </>
  );
};

export default SearchBar;
