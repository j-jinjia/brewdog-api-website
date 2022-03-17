import React from "react";
import "./NavFaq.scss";
import cross from "../../assets/images/black-cross.png";
import warning from "../../assets/images/drink-responsably.png";
const NavFaq = ({ handleFaqClick }) => {
  return (
    <div className="help">
      <img
        className="help__cross"
        src={cross}
        alt="white-cross"
        onClick={handleFaqClick}
      />
      <div className="content">
        <h3 className="content__title">Need help?</h3>
        <p className="content__subtitle">Let me show you around!</p>
        <br />
        <p className="content__content">
          {" "}
          In this website you can search for your favourite BrewDog beer. <br />
          You will be able to see basic information about each beer and some
          extra information once you click on View More. <br />
          <br />
          Can't find your perfect drink? Try using the search box <br />
          Want to search with a specific criteria? Try using our filters.
        </p>
        <img src={warning} alt="drink-responsably" className="content-image" />
      </div>
    </div>
  );
};

export default NavFaq;
