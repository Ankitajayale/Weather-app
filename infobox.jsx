import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./searchBox";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function infobox({ info }) {
  const imageurl =
    "https://media.istockphoto.com/id/1246366598/photo/a-scenic-view-of-boats-under-a-blue-sky-in-backwaters-situated-in-allepey-town-located-in.webp?b=1&s=170667a&w=0&k=20&c=ixFEmmAN-NJVetK8OyrlRqHZKCzBWO4hVSQIjAOn80M=";
  let hot_url =
    "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.webp?b=1&s=170667a&w=0&k=20&c=8ijy1ixq0ALEpJIt9D4ElKJzayexgzXTDG2ZRCYVfHQ=";
  let cold_url =
    "https://images.unsplash.com/photo-1668418321923-becc3ef20077?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
  let rain_url =
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?b=1&s=170667a&w=0&k=20&c=7nD_8127UoUACRboJelDa-h-g0afqyRP9h8jtJ5xvUo=";

  return (
    <div className="infobox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? rain_url : info.temp > 15 ? hot_url : cold_url
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 15 ? (
              <WbSunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="span">
            <p> Temperature = {info.temp} &deg;C</p>
            <p> Humidity = {info.humidity}</p>
            <p> Min Temperature = {info.tempMax}&deg;C</p>
            <p> Max Temperature = {info.tempMin}&deg;C</p>
            <p>
              {" "}
              Weather can be described as <b>{info.weather}</b> and feels like{" "}
              {info.feelsLike} &deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
