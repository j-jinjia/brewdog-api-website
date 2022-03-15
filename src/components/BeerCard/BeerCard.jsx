import React from "react";
import "./BeerCard.scss";

const BeerCard = (props) => {
  const { name, tag, brewYear, image } = props;
  return (
    <div className="beer">
      <img className="beer__img" src={image} alt={name} />
      <p className="beer__name">{name}</p>
      <p className="beer__tag">{tag}</p>
      <p className="beer__brew-year">{brewYear}</p>
    </div>
  );
};

export default BeerCard;
