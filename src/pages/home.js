import React from "react";
import Logo_pic from "../assets/background.png";

function home() {
  return (
    <div className ="content">
      <h1>Home</h1>
      <img src={Logo_pic} alt="logo pic" />
    </div>
  );
}

export default home;
