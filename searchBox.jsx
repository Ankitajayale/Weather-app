import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchBox.css";
import { useState } from "react";

export default function searchbox({ updateinfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  const Api_Key = "42bec1a9f63227c36494d83bf02b96c1";

  let getWeather = async () => {
    try {
      let response = await fetch(
        `${apiUrl}?q=${city}&appid=${Api_Key}&units=metric`,
      );
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newinfo = await getWeather();
      updateinfo(newinfo);
       setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="searchbox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="filled"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br> <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color:"red"}} > No such place found:) </p>}
      </form>
    </div>
  );
}
