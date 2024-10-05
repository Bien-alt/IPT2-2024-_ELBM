import React from "react";
import ReactDOM from "react-dom/client"; // Updated for React 18+
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./HomePage/Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Login from "./LoginPage/Login";
import ProfilePage from "./ProfilePage";

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

if (document.getElementById("root")) {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Routers />);
}
