import React from "react";
import "./Loader.css";
import logo from "../assets/logo.png"; // 👈 logo import

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <img src={logo} alt="Loading..." className="loader-logo" />
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
