import axios from "axios";

export const GetWeather = (city) => {
  const API_KEY = "787f825601a05885bcca9b7a29ca8b63";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;

  return axios({
    method: "GET",
    url: url,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
