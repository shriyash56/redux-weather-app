import React from "react";
import { useSelector } from "react-redux";
import "../css/weather.css";

function WeatherList() {
  const weather_data = useSelector((state) => state.weather);
  const loading = weather_data.loading;
  console.log(loading);
  const cityData = weather_data.weatherData;
  const fiveDay_data = [];

  if (cityData !== undefined) {
    const curr_date_time = cityData.list[0].dt_txt;
    const curr_time = curr_date_time.split(" ")[1];
    const curr_hour = curr_time.split(":")[0];
    let next_day = (24 - curr_hour) / 3;
    let temp = Math.ceil(cityData.list[next_day].main.temp - 273);
    let hum = cityData.list[next_day].main.humidity;
    let obj = { temp: temp, hum: hum };
    fiveDay_data.push(obj);
    let k = 0;
    while (k < 4) {
      next_day = next_day + 8;
      console.log(next_day);
      let tempreature = Math.ceil(cityData.list[next_day].main.temp - 273);
      let humidity = cityData.list[next_day].main.humidity;
      let obj1 = { temp: tempreature, hum: humidity };
      fiveDay_data.push(obj1);
      k++;
    }
  }

  return (
    <React.Fragment>
      <hr />
      <br />
      <div className="container">
        <div className="current_weatherData">
          <h1 style={{ textAlign: "center" }}>Current Weather Data</h1>
          <br />
          {cityData !== undefined && (
            <div>
              <h3>
                Temp: {Math.ceil(cityData.list[0].main.temp - 273)} &#8451;
              </h3>
              <h3>Weather: {cityData.list[0].weather[0].description}</h3>
              <h3>Pressure: {cityData.list[0].main.pressure} &#13169;</h3>
              <h3>Humidity: {cityData.list[0].main.humidity} %</h3>
            </div>
          )}
        </div>
        <div className="fiveDay_weather">
          <h1 style={{ textAlign: "center" }}>5 Day Weather Forecast</h1>
          <br />
          {cityData !== undefined && (
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Temperature (C)</th>
                    <th>Humidity (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {fiveDay_data.map((ele, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{ele.temp} &#8451;</td>
                        <td>{ele.hum}%</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default WeatherList;
