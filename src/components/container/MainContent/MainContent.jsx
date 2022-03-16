import { React, useState, useEffect } from "react";
import "./MainContent.scss";
import AllBeers from "../../AllBeers/AllBeers";
import SearchBar from "../../SearchBar/SearchBar";

const MainContent = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const url = "https://api.punkapi.com/v2/beers";

  const getBeers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  };
  useEffect(() => {
    getBeers(beers);
  }, [beers]);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredBeers = beers.filter((beer) => {
    const beerNameLower = beer.name.toLowerCase();
    return beerNameLower.includes(searchTerm) && beer.name;
  });
  return (
    <>
      <SearchBar
        label="beers"
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <AllBeers beerArr={filteredBeers} />;
    </>
  );
};

export default MainContent;
