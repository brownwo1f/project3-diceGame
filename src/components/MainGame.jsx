import React from "react";
import styled from "styled-components";
import ScoreBox from "./ScoreBox";
import NumberSelect from "./NumberSelect";
import DiceRoll from "./DiceRoll";
import { useState } from "react";
import Rules from "./Rules";

const MainGame = () => {
  const [number, setNumber] = useState(); //user selected number
  const [score, setScore] = useState(0);
  const [dice, setDice] = useState(1);
  const [error, setError] = useState("");
  const [rules, setRules] = useState(false);

  const roll = () => {
    if (!number) {
      setError("You have not selected any number!");
      return;
    }
    setError("");
    setDice(Math.floor(Math.random() * 6 + 1));
    if (dice === number) {
      setScore((score) => score + dice);
    } else {
      setScore((score) => score - 2);
    }
    setNumber();
  };
  const reset = () => {
    setDice(1);
    setNumber(null);
    setScore(0);
  };
  return (
    <>
      <Navbar>
        <ScoreBox score={score} />
        <NumberSelect error={error} number={number} setNumber={setNumber} />
      </Navbar>
      <DiceRoll
        rules={rules}
        setRules={setRules}
        roll={roll}
        reset={reset}
        dice={dice}
      />
      {rules ? <Rules /> : null}
    </>
  );
};

export default MainGame;

const Navbar = styled.div`
  width: 80%;
  min-width: 700px;
  height: 140px;
  margin: 64px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
