import React from "react";
import styled from "styled-components";
import { useState } from "react";

const DiceRoll = ({ rules, setRules, dice, roll, reset }) => {
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <Dice
        onClick={roll}
        src={`src/assets/dice_${dice}.png`}
        alt={`${dice}`}
      ></Dice>
      <Text>Click on the dice to roll</Text>
      <Button onClick={reset}>Reset Score</Button>
      <br></br>
      <Button
        onClick={() => setRules(!rules)}
        style={{ background: "black", color: "white" }}
      >
        Show Rules
      </Button>
    </main>
  );
};

export default DiceRoll;

const Dice = styled.img`
  width: 200px;
  height: 200px;
  margin: -75px 42.5% 0;
`;
const Text = styled.text`
  font-size: 15px;
  width: 250px;
  font-weight: 600;
  text-align: center;
  padding: 25px;
  margin: 0 41%;
`;
const Button = styled.button`
  font-size: 13px;
  width: 170px;
  height: 44px;
  font-weight: 600;
  margin: 5px 43.5%;
  border-radius: 5px;
  background-color: white;
`;
