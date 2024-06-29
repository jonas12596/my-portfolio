import axios from "axios";

export default function FetchWeather({setTemp}) {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?zip=77055,us&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=imperial`
    )
    .then((res) => {
      const data = res.data;
      const temperature = data.main.temp;
      setTemp(Math.round(temperature));
    });
}
