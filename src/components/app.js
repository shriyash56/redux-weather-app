import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import SelectCity from "../containers/SelectCity";
import WeatherList from "../containers/weather_list";
import About from "../containers/About";
import Login from "../containers/Login";
import Signup from "../containers/Signup";

function Main() {
  const data = useSelector((state) => state.weather);
  const logged = data.IsLogged;
  const history = useHistory();

  return (
    <React.Fragment>
      {logged ? (
        <div>
          <SelectCity />
          <WeatherList />
          <About />
        </div>
      ) : (
        history.push("/")
      )}
    </React.Fragment>
  );
}

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/app" component={Main} />
      </Switch>
    );
  }
}
