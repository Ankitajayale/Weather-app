import "./searchBox";
import Searchbox from "./searchBox";
import Infobox from "./infobox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherinfo, setWeatherinfo] = useState({
    city: "Delhi",
    feelsLike: 30.76,
    humidity: 29,
    temp: 32.05,
    tempMax: 32.05,
    tempMin: 32.05,
    weather: "haze",
  });

  let updateinfo = (newinfo) => {
    setWeatherinfo(newinfo);
  };

  return (
    <div className="Weatherapp">
      <h2>Weather App</h2>
      <Searchbox updateinfo={updateinfo} />
      <br></br>
      <Infobox info={weatherinfo} />
    </div>
  );
}
