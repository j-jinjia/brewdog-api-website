import React from "react";
import "./FunctionalityBar.scss";
import SearchBar from "../../SearchBar/SearchBar";
import Filters from "../../Filters/Filters";
import SortBy from "../../SortBy/SortBy";
import BeersDisplay from "../../BeersDisplay/BeersDisplay";

const FunctionalityBar = () => {
  return (
    <>
      <div className="functionality-bar-container">
        <SearchBar />
        <Filters />
        <SortBy />
        <BeersDisplay />
      </div>
    </>
  );
};

export default FunctionalityBar;
