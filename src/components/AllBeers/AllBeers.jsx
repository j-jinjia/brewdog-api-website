import React from "react";
import "./AllBeers.scss";
import BeerCard from "../BeerCard/BeerCard";

const AllBeers = ({ beerArr }) => {
  return (
    <div className="beer-container">
      {beerArr.map((beer) => {
        return (
          <BeerCard
            key={beer.id}
            name={beer.name}
            tag={beer.tagline}
            brewYear={beer.first_brewed}
            image={beer.image_url}
          />
        );
      })}
    </div>
  );
};

export default AllBeers;
