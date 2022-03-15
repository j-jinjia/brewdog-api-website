import { React, useState, useEffect } from "react";
import "./MainContent.scss";
import AllBeers from "../../AllBeers/AllBeers";

const MainContent = () => {
  const [beers, setBeers] = useState([]);
  const url = "https://api.punkapi.com/v2/beers";

  const getBeers = async ([]) => {
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  };
  useEffect(() => {
    getBeers(beers);
  }, []);

  return <AllBeers beerArr={beers} />;
};

export default MainContent;
