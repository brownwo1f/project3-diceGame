import React from "react";
import styled from "styled-components";

const NumberSelect = ({ error, number, setNumber }) => {
  const arrNum = [1, 2, 3, 4, 5, 6];

  return (
    <NumBox>
      <Text style={{ color: "red" }}>{error}</Text>
      <SelectNum>
        {arrNum.map((value, i) => (
          <Button
            isSelected={value == number}
            key={i}
            onClick={() => {
              setNumber(value);
            }}
          >
            {value}
          </Button>
        ))}
      </SelectNum>
      <Text style={{ fontWeight: "800" }}>Select Number</Text>
    </NumBox>
  );
};

export default NumberSelect;

const NumBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap-reverse;
`;
const SelectNum = styled.div`
  display: flex;
`;
const Button = styled.button`
  border: 2px solid;
  font-size: 24px;
  font-weight: 800;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  width: 60px;
  height: 60px;
  margin: 0 12px;
  &:hover {
    background-color: black;
    color: white;
  }
`;
const Text = styled.text`
  font-size: 20px;
  font-weight: 600;
  text-align: right;
  padding: 10px 10px;
`;
