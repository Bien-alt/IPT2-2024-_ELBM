import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navs"; // Assuming Navs.js manages navigation links/buttons
import "../../sass/components/profilePage.scss";

export default function ProfilePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic for logging out, such as clearing authentication data
    navigate("/"); // Redirect to the Login page
  };

  return (
    <div className="profile-page">
      <Navigation /> {/* Navigation component */}
      <div className="profile-container">
        <h1>Your Profile</h1>
        <div className="profile-info">
          <div className="profile-pic">
            {/* Placeholder for a profile picture */}
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="profile-image"
            />
          </div>
          <div className="profile-details">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> john.doe@example.com</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Location:</strong> New York, USA</p>
          </div>
        </div>
        <div className="profile-actions">
          <button className="edit-profile">Edit Profile</button>
          <button className="logout" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
