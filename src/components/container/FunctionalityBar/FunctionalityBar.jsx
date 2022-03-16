/* import { React, useState } from "react";
import "./FunctionalityBar.scss";
import SearchBar from "../../SearchBar/SearchBar";
import Filters from "../../Filters/Filters";
import SortBy from "../../SortBy/SortBy";
import BeersDisplay from "../../BeersDisplay/BeersDisplay";

const FunctionalityBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  return (
    <>
      <div className="functionality-bar-container">
        <SearchBar
          label="beers"
          searchTerm={searchTerm}
          handleInput={handleInput}
        />
      </div>
    </>
  );
};

export default FunctionalityBar;
 */
