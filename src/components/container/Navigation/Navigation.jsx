import "./Navigation.scss";

import icon from "../../../assets/images/brewdog-icon.png";
import NavFaq from "../../NavFaq/NavFaq";

import { React, useState } from "react";

const Navigation = () => {
  const [showFaq, setShowFaq] = useState(false);
  const handleFaqClick = () => {
    setShowFaq(!showFaq);
  };
  return (
    <article className="navigation">
      {showFaq && <NavFaq handleFaqClick={handleFaqClick} />}
      <img src={icon} alt="brewdog-icon" className="navigation__logo" />
      <h1>BREWDOG</h1>
      <h2 className="navigation__faq" onClick={handleFaqClick} tabIndex="0 ">
        HELP
      </h2>
    </article>
  );
};

export default Navigation;
