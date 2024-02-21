import React from "react";
import styled from "styled-components";

const Home = ({ toggle }) => {
  return (
    <Main>
      <aside>
        <img src="src/assets/dices 1.png" alt="Dices" />
      </aside>
      <Section>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </Section>
    </Main>
  );
};

export default Home;

const Main = styled.div`
  width: 1152px;
  height: 522px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6% auto;
`;

const Section = styled.div`
  font-size: 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap-reverse;
`;

const Button = styled.button`
  background-color: black;
  width: 200px;
  color: white;
  border: none;
  padding: 10px 30px;
  margin-top: 20px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.3s background-color ease-in;
  &:hover {
    background-color: white;
    border: 1px solid black;
    transition: 0.3s background-color ease-in;
    color: black;
  }
`;
