import React from "react";
import FunctionalityBar from "./components/container/FunctionalityBar/FunctionalityBar";
import MainContent from "./components/container/MainContent/MainContent";
import Navigation from "./components/container/Navigation/Navigation";
import "./App.scss";
const App = () => {
  return (
    <>
      <Navigation />;
      <FunctionalityBar />
      <MainContent />
    </>
  );
};

export default App;
