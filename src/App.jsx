import React from "react";
import FunctionalityBar from "./components/container/FunctionalityBar/FunctionalityBar";
import MainContent from "./components/container/MainContent/MainContent";
import Navigation from "./components/container/Navigation/Navigation";

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
