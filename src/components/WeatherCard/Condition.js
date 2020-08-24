import React from "react";
import styled from "@emotion/styled";

const Condition = ({temp, condition}) => {
  const TempStyle = styled.h1`
    font-family: "Fira Sans";
    font-size: 2rem;
    font-weight: 200;
  `;

  const StateStyle = styled.h3`
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 1.2rem;
  `;

  return (
    <>
      <TempStyle>{temp}</TempStyle>
      <StateStyle>{condition}</StateStyle>
    </>
  );
};

export default Condition;
