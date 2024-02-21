import React from "react";
import styled from "styled-components";

const ScoreBox = ({ score }) => {
  return (
    <ScoreDiv>
      <H1>{score}</H1>
      <Text>Total Score</Text>
    </ScoreDiv>
  );
};

export default ScoreBox;

const ScoreDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const H1 = styled.text`
  font-size: 110px;
  padding-left: 10px;
`;
const Text = styled.text`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;
