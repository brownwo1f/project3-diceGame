import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <Box>
      <h1>How to Play ❓</h1>
      <ul>
        <List>Select any number</List>
        <List>Click on dice image</List>
        <List>
          after click on dice if selected number is equal to dice number you
          will get same point as dice
        </List>
        <List>if you get wrong guess then 2 point will be deducted</List>
      </ul>
    </Box>
  );
};

export default Rules;

const Box = styled.div`
  padding-top: 10px;
  padding-left: 30%;
  text-align: left;
  border: 2px solid;
`;
const List = styled.li`
  padding: 5px;
`;
