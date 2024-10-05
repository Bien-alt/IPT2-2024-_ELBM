import React from "react";
import { Link } from "react-router-dom";

export default function Navs() {
  return (
    <nav>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link> {/* Updated Link Text */}
        </li>
      </ul>
    </nav>
  );
}
