import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const IconStyle = styled.img`
    width: 30%;
  `;

  return (
    <IconStyle className="icon" src="./img/cloud.png" alt="Weather Icon" />
  );
};

export default Icon;
