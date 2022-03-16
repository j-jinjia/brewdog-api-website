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
      <h4 className="filters" onClick={handleDropDown}>
        Filter
      </h4>
      {showDropDown && (
        <div className="container">
          <form>
            <label htmlFor="High ABV">High ABV + 6.0% </label>
            <input type="checkbox" name="abv" onClick={handleCheckABV} />
          </form>
          <form>
            <label htmlFor="Classic Range">Classic Range</label>
            <input
              type="checkbox"
              name="classic"
              onClick={handleCheckClassic}
            />
          </form>
          <form action="">
            <label htmlFor="Acidity">Acidic less than 4 </label>
            <input type="checkbox" name="ph" onClick={handleCheckPH} />
          </form>
        </div>
      )}
    </>
  );
};
export default Filters;
