import React, { useState } from "react";
import styled from "styled-components";
import Home from "./components/Home";
import MainGame from "./components/MainGame";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGame = () => {
    setIsGameStarted(!isGameStarted);
  };
  return (
    <div>{isGameStarted ? <MainGame /> : <Home toggle={toggleGame} />}</div>
  );
};

export default App;
