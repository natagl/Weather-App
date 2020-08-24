import React from "react";
import styled from "@emotion/styled";

import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";

const WeatherCard = ({ temp, condition, city, country }) => {
  let heighColor = 0;
  let lowColor = 0;
  let bg = null;

  if (temp > 12) {
    //Hot Weather
    let heighColor = (1 - (temp - 12) / 28) * 255;
    let lowColor = heighColor - 150;
    bg = `linear-gradient(
      to top,
      rgb(255, ${heighColor}, 0),
      rgb(255, ${lowColor}, 0)
    )`;
  } else if (temp <= 12) {
    //Cold Weather
    heighColor = (1 - (temp + 20) / 32) * 255;
    lowColor = heighColor - 150;
    bg = `linear-gradient(
      to top,
      rgb(0, ${heighColor}, 255),
      rgb(0, ${lowColor}, 255)
    )`;
  }

  const Card = styled.div`
    margin: 0 auto;
    background: ${bg};
    width: 200px;
    height: 240px;
    display: flex;
    flex-flow: column wrap;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <Card>
      <Location city={city} country ={country} />
      <Icon condition={condition} />
      <Condition condition={condition} temp = {temp}/>
    </Card>
  );
};

export default WeatherCard;
