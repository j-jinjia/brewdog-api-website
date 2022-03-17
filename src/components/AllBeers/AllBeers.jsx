import React from "react";
import "./AllBeers.scss";
import BeerCard from "../BeerCard/BeerCard";

const AllBeers = ({ beerArr }) => {
  return (
    <article className="card-container">
      {beerArr.map((beer) => {
        return (
          <BeerCard
            key={beer.id}
            name={beer.name}
            tag={beer.tagline}
            brewYear={beer.first_brewed}
            image={beer.image_url}
            abv={beer.abv}
            ph={beer.ph}
            description={beer.description}
            ingredients={Object.keys(beer.ingredients)}
            food={beer.food_pairing}
            tip={beer.brewers_tips}
          />
        );
      })}
    </article>
  );
};

export default AllBeers;
