import React from "react";
import "./ButtonViewMore.scss";
const ButtonViewMore = (props) => {
  const { name, handleViewMore } = props;
  return <button onClick={handleViewMore}>{name}</button>;
};

export default ButtonViewMore;
