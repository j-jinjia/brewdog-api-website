import { React, useState } from "react";
import "./BeerCard.scss";
import ButtonViewMore from "../ButtonViewMore/ButtonViewMore";

/** This component handles the rendering of a single card. It gets passed down props from AllBeers component. On clicking View More button, will show extra information about the beer and on clicking the Return button, will go back to tis original state.*/
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
    setViewMore(!viewMore);
  };
  return (
    <article className="card">
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
              ABV: <br /> {abv}%
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
          <article className="extra-content">
            <ul className="content-list">
              <li>
                <h3 className="content-list__title">Product Description</h3>
                <p>{description}</p>
              </li>
              <li>
                <h3 className="content-list__title">Ingredients</h3>
                <p>The ingredients are : {ingredients.join(", ")}</p>
              </li>
              <li>
                <h3 className="content-list__title">Food Pairing</h3>
                <p>{food.join(" or ")}</p>
              </li>
              <li>
                <h3 className="content-list__title">Tips</h3>
                <p>{tip}</p>
              </li>
            </ul>
            <ButtonViewMore name="Return" handleViewMore={handleClick} />
          </article>
        </>
      )}
    </article>
  );
};

export default BeerCard;
