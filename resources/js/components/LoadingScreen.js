import React from 'react';
import logo from "../../../images/logo_1.png"; // Adjust the path as needed

const LoadingScreen = () => (
  <div className="loading-screen">
    <img src={logo} alt="Logo" className="loading-logo" />
    <div className="loader">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  </div>
);

export default LoadingScreen;
