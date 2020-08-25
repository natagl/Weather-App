import React, { useEffect, useState } from "react";

import WeatherCard from "./components/WeatherCard/componentWeatherCard";
import "./App.css";

function App() {
  const location = "Miami, usa";

  const [query, setQuery] = useState("");
  // const [city, setCity] = useState("");
  // const [country, setCountry] = useState("");
  // const [temp, setTemp] = useState("");
  // const [condition, setCondition] = useState("");
  const [weather, setWeather] = useState({
    city: null,
    country: null,
    temp: null,
    condition: null,
  });



  const getWeather = async (q) => {
    const apiResponse = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=91642985c388e5f4eb879de64cdbaf7b`
    );
    //turning data into JSON format
    const responseJSON = await apiResponse.json();
    setWeather({
      city: responseJSON.name,
      country: responseJSON.sys.country,
      temp: responseJSON.main.temp,
      condition: responseJSON.weather[0].main,
    });
  };
  // Function to handle search queries from the user side
  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };
  //  This hook will make the code run only once th ecomponent is mounted and never again
  useEffect(() => {
    getWeather(location)
  }, [location]);

  return (
    <div className="App">
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />
      <form>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
}

export default App;
