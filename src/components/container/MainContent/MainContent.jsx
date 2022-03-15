import React from "react";
import "./MainContent.scss";
import AllBeers from "../../AllBeers/AllBeers";
import beers from "../../../data/data";

const MainContent = () => {
  return <AllBeers beerArr={beers} />;
};

export default MainContent;
