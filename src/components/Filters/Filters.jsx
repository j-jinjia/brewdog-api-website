import { React, useState } from "react";
import "./Filters.scss";

const Filters = (props) => {
  const { handleCheckABV, handleCheckClassic, handleCheckPH } = props;
  const [showDropDown, setShowDropDown] = useState(false);
  const handleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <>
      <div className="container">
        {!showDropDown && (
          <h4 className="filters" onClick={handleDropDown} tabIndex="2">
            Filters
          </h4>
        )}
        {showDropDown && (
          <>
            <h4 className="close-filters" onClick={handleDropDown}>
              Close filters
            </h4>
            <form className="form-checkbox">
              <input type="checkbox" name="abv" onClick={handleCheckABV} />
              <label htmlFor="High ABV">High ABV + 6.0%</label>
              <input
                type="checkbox"
                name="classic"
                onClick={handleCheckClassic}
              />
              <label htmlFor="Classic Range">Classic Range </label>
              <input type="checkbox" name="ph" onClick={handleCheckPH} />
              <label htmlFor="Acidity">Acidic (PH) less than 4 </label>
            </form>
          </>
        )}
      </div>
    </>
  );
};
export default Filters;
