import React from "react";
import "./FunctionalityBar.scss";
import SearchBar from "../../SearchBar/SearchBar";
import Filters from "../../Filters/Filters";
import SortBy from "../../SortBy/SortBy";
import BeersDisplay from "../../BeersDisplay/BeersDisplay";

const FunctionalityBar = () => {
  return (
    <>
      <div>FunctionalityBar</div>
      <SearchBar />
      <Filters />
      <SortBy />
      <BeersDisplay />
    </>
  );
};

export default FunctionalityBar;
