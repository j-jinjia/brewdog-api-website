import { React } from "react";
import MainContent from "./components/container/MainContent/MainContent";
import Navigation from "./components/container/Navigation/Navigation";
import "./App.scss";
const App = () => {
  return (
    <>
      <Navigation />
      <MainContent />
    </>
  );
};

export default App;
