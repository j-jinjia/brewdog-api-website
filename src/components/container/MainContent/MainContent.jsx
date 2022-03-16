import { React, useState, useEffect } from "react";
import "./MainContent.scss";
import AllBeers from "../../AllBeers/AllBeers";
import SearchBar from "../../SearchBar/SearchBar";
import Filters from "../../Filters/Filters";

const MainContent = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const url = "https://api.punkapi.com/v2/beers?page=2&per_page=80";

  const getBeers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredBeers = beers.filter((beer) => {
    const beerNameLower = beer.name.toLowerCase();
    return beerNameLower.includes(searchTerm);
  });
  const handleCheckedABV = (e) => {
    e.target.checked
      ? setBeers(beers.filter((beer) => beer.abv > 6))
      : getBeers(beers);
  };
  const handleCheckedClassic = (e) => {
    e.target.checked
      ? setBeers(beers.filter((beer) => beer.first_brewed.split("/")[1] < 2010))
      : getBeers(beers);
  };
  const handleCheckedPH = (e) => {
    e.target.checked
      ? setBeers(beers.filter((beer) => beer.ph < 4))
      : getBeers(beers);
  };

  return (
    <div className="container">
      <div className="functionality-bar">
        <SearchBar
          label="beers"
          searchTerm={searchTerm}
          handleInput={handleInput}
        />
        <Filters
          handleCheckABV={handleCheckedABV}
          handleCheckClassic={handleCheckedClassic}
          handleCheckPH={handleCheckedPH}
        />
      </div>
      <AllBeers beerArr={filteredBeers} />
    </div>
  );
};

export default MainContent;
