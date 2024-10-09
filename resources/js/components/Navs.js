import React from "react";
import { Link } from "react-router-dom";

export default function Navs() {
  return (
    <nav>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <Link to="/home">Home</Link> {/* Navigate to Home page */}
        </li>
        <li>
          <Link to="/registration">Registration</Link> {/* Navigate to Registration page */}
        </li>
        <li>
          <Link to="/profile">Profile</Link> {/* Navigate to Profile page */}
        </li>
        <li>
          <Link to="/schedule">Schedule</Link> {/* Navigate to Schedule page */}
        </li>
        <li>
          <Link to="/course-selection">Course Selection</Link> {/* Navigate to Course Selection page */}
        </li>
      </ul>
    </nav>
  );
}
