import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./HomePage/Home"; // Ensure this path is correct
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Login from "./LoginPage/Login"; // Ensure this path is correct
import Register from "./Registration/register"; // Ensure this path is correct

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="registration" element={<Register />} />
      </Routes>
    </Router>
  );
}

if (document.getElementById("root")) {
  ReactDOM.render(<Routers />, document.getElementById("root"));
}
