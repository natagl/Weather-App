import React from "react";

import WeatherCard from "./components/WeatherCard/componentWeatherCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherCard temp={-15} condition="Clear" city="Kiev" country="Ukraine" />
      <WeatherCard temp={20} condition="Clouds" />
      <WeatherCard temp={40} condition="Thunderstorm" />
      <WeatherCard temp={10} condition="Dust" />
    </div>
  );
}

export default App;
