import { React, useState } from "react";
import "./BeerCard.scss";
import ButtonViewMore from "../ButtonViewMore/ButtonViewMore";
const BeerCard = (props) => {
  const {
    name,
    tag,
    brewYear,
    image,
    abv,
    ph,
    description,
    ingredients,
    food,
    tip,
  } = props;
  const [viewMore, setViewMore] = useState(true);
  const handleClick = () => {
    console.log("clicked");
    setViewMore(!viewMore);
  };
  return (
    <div className="card">
      {viewMore && (
        <>
          <img className="card__img" src={image} alt={name} />
          <div className="content">
            <h3 className="content__name">{name}</h3>
            <p className="content__tag">{tag}</p>
            <p className="content__brew-year">
              Brew Year: <br /> {brewYear}
            </p>
            <p className="content__abv">
              ABV: <br /> {abv}
            </p>
            <p className="content__ph">
              PH:
              <br /> {ph}
            </p>
            <ButtonViewMore name="View More" handleViewMore={handleClick} />
          </div>
        </>
      )}
      {!viewMore && (
        <>
          <div className="extra-content">
            <p className="extra-content__descritpion">
              Product description:
              <br />
              {description}
            </p>

            <p className="extra-content__ingredients">
              Ingredients: <br />
              {ingredients.join(", ")}
            </p>

            <p className="extra-content__food">
              Food pairing: <br />
              {food.join(", ")}
            </p>

            <p className="extra-content__tip">
              Tips: <br />
              {tip}
            </p>
            <ButtonViewMore
              className="extra-content__button"
              name="Return"
              handleViewMore={handleClick}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BeerCard;
