import React from "react";
import styled from "@emotion/styled";

const Location = ({city, country}) => {
  const LocationStyle = styled.div`
    text-align: center;
  `;

  const City = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.6em;
  `;

  const Country = styled.div`
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 1.1rem;
  `;

  return (
    <LocationStyle>
      <City>{city}</City>
      <Country>{country}</Country>
    </LocationStyle>
  );
};

export default Location;
