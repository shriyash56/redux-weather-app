import React, { useState } from "react";
import "../css/about.css";

function About() {
  const [click, setclick] = useState(false);

  const handleClicked = () => {
    setclick(true);
  };

  const handleCross = () => {
    setclick(false);
  };

  return (
    <div>
      <br />
      <div className="btn">
        <button onClick={handleClicked} className="about_btn">
          About Us
        </button>
      </div>
      <div class={click ? "open_sidepanel" : "close_sidepanel"}>
        <button className="closebtn" onClick={handleCross}>
          ×
        </button>
        <h1 className="about_info">About Us Information</h1>
        <p>
          Loreum ipsum dolor set imet et delectus accomodation his consule vx at
          pute
        </p>
      </div>
    </div>
  );
}

export default About;
