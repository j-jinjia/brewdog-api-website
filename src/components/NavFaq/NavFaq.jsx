import React from "react";
import "./NavFaq.scss";
import cross from "../../assets/images/white-cross.png";
const NavFaq = ({ handleFaqClick }) => {
  return (
    <div className="help">
      <img
        className="help__cross"
        src={cross}
        alt="white-cross"
        onClick={handleFaqClick}
      />
      <h3 className="help__title">Need help?</h3>
      <p className="help__subtitle">Let me show you around!</p>
    </div>
  );
};

export default NavFaq;
