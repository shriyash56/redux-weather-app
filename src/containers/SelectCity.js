import React from "react";
import { useHistory } from "react-router-dom";
import { checkLogged } from "../actions/index";
import { fetchWeather } from "../actions/index";
import { useDispatch } from "react-redux";
import "../css/dropdown.css";

function SelectCity() {
  const dispatch = useDispatch();

  const history = useHistory();

  const list_Of_City = [
    "Pune",
    "Mumbai",
    "Delhi",
    "Nagpur",
    "Bangalore",
    "Nashik"
  ];

  const handleSelect = (e) => {
    dispatch(fetchWeather(e.target.value));
    //dispatch(loading(true));
  };

  return (
    <React.Fragment>
      <div className="weather_list">
        <h1 style={{ textAlign: "center" }}>Select City</h1>
        <select className="list" name="weather_list" onChange={handleSelect}>
          <option value="" style={{ color: "black" }} disabled selected>
            Select your option
          </option>
          {list_Of_City.map((ele, index) => {
            return (
              <option key={index} value={ele}>
                {ele}
              </option>
            );
          })}
        </select>
      </div>
      <button
        className="logout_btn"
        onClick={() => {
          dispatch(checkLogged());
          history.push("/");
        }}
      >
        Log Out
      </button>
    </React.Fragment>
  );
}
export default SelectCity;
