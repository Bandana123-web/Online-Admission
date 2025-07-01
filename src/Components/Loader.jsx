import React from "react";
import "./Loader.css";
import logo from "../assets/logo.png"; 

const Loader = () => {
  return (
    <div className="loader-wrapper">
     <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Loading..." className="loader-logo" />

      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
