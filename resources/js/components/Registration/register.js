import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "../../../sass/components/_register.scss";
import { useNavigate } from "react-router-dom";

const logoUrl = 'https://cdn.discordapp.com/attachments/725332328494399539/1290644340326010910/logo_1.png?ex=66fd35b5&is=66fbe435&hm=58a50ad98cb5874b4688b24469ff66749587c4e5fbb6fc492367c72f92c519e4&';

const LoadingScreen = () => (
  <div className="loading-screen">
    <img src={logoUrl} alt="Logo" className="loading-logo" />
    <div className="loader">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  </div>
);

export default function Register() {
  const [loading, setLoading] = useState(false); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
  const [formData, setFormData] = useState({
    fullName: '',
    studentNumber: '',
    yearLevel: '',
    email: '',
    phoneNumber: '',
    degreeProgram: '',
    birthDate: '',
    streetAddress: '',
    city: '',
    stateProvince: '',
    postalCode: '',
    emergencyFirstName: '',
    emergencyLastName: '',
    emergencyRelationship: '',
    emergencyContactNumber: '',
    role: ''  // Added role here
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Do something with the form data
  };

  const goToPage = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path); 
      setLoading(false);
    }, 1000);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="register-container">
      {loading && <LoadingScreen />} 
      {isSidebarOpen && (
        <div className="sidebar">
          <img src={logoUrl} alt="Logo" className="logo" />
          <nav className="navbar">
            <ul className="sidebar-menu">
              <li>
                <a onClick={() => goToPage("/home")} className="nav-link">HOME</a>
              </li>
              <li>
                <a onClick={() => goToPage("/enrollment")} className="nav-link">ENROLLMENT</a>
              </li>
              <li>
                <a onClick={() => goToPage("/contact-us")} className="nav-link">CONTACT US</a>
              </li>
              <li>
                <a onClick={() => goToPage("/about-us")} className="nav-link">ABOUT US</a>
              </li>
              <li>
                <a onClick={() => goToPage("/logout")} className="nav-link">LOGOUT</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <div className="main-content">
        <nav className="top-navbar">
          <button className="toggle-button" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <h2>Student Registration</h2>
        </nav>
        <div className="form-container">
          <h3>STUDENT REGISTRATION FORM</h3>
          <form className="registration-form" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Basic Information</legend>
              <div className="full-name-row">
                <div className="form-row">
                  <label htmlFor="fullName">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    name="fullName" 
                    className="full-name-input" 
                    placeholder="Last Name, First Name, Middle Name" 
                    value={formData.fullName} 
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="student-number-row">
                <div className="form-row">
                  <label htmlFor="studentNumber">Student Number</label>
                  <input 
                    type="text" 
                    id="studentNumber" 
                    name="studentNumber" 
                    placeholder="ID Number" 
                    value={formData.studentNumber} 
                    onChange={handleChange}
                  />
                  <label htmlFor="yearLevel">Year Level</label>
                  <select 
                    id="yearLevel" 
                    name="yearLevel" 
                    value={formData.yearLevel} 
                    onChange={handleChange}
                  >
                    <option>Please Select</option>
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>4th Year</option>
                  </select>
                </div>
              </div>
              <div className="email-row">
                <div className="form-row">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleChange}
                  />
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input 
                    type="text" 
                    id="phoneNumber" 
                    name="phoneNumber" 
                    placeholder="Phone Number" 
                    value={formData.phoneNumber} 
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="degree-program-row">
                <div className="form-row">
                  <label htmlFor="degreeProgram">Degree Program</label>
                  <select 
                    id="degreeProgram" 
                    name="degreeProgram" 
                    value={formData.degreeProgram} 
                    onChange={handleChange}
                  >
                    <option>Please Select</option>
                    <option>Bachelor of Library and Information Science (BLIS)</option>
                    <option>Bachelor of Science in Computer Science (BSCS)</option>
                    <option>Bachelor of Science in Information Technology (BSIT)</option>
                    <option>Bachelor of Science in Entertainment and Multimedia Computing (BSEMC) - Game Development Track</option>
                    <option>Bachelor of Science in Entertainment and Multimedia Computing (BSEMC) - Digital Animation Track</option>
                  </select>
                </div>
              </div>
              <div className="birth-date-row">
                <div className="form-row">
                  <label htmlFor="birthDate">Birth Date</label>
                  <input 
                    type="date" 
                    id="birthDate" 
                    name="birthDate" 
                    value={formData.birthDate} 
                    onChange={handleChange}
                  />
                </div>
              </div>
            </fieldset>

            {/* Roles Section */}
            <fieldset>
              <legend>Roles</legend>
              <div className="form-row">
                <label>Select Role:</label>
                <div className="role-options">
                  <label>
                    <input 
                      type="radio" 
                      name="role" 
                      value="admin" 
                      onChange={handleChange}
                    /> 
                    Admin
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="role" 
                      value="teacher" 
                      onChange={handleChange}
                    /> 
                    Teacher
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="role" 
                      value="student" 
                      onChange={handleChange}
                    /> 
                    Student
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Present Address</legend>
              <div className="form-row">
                <label htmlFor="streetAddress">Street Address</label>
                <input 
                  type="text" 
                  id="streetAddress" 
                  name="streetAddress" 
                  placeholder="Street Address" 
                  value={formData.streetAddress} 
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label htmlFor="city">City</label>
                <input 
                  type="text" 
                  id="city" 
                  name="city" 
                  placeholder="City" 
                  value={formData.city} 
                  onChange={handleChange}
                />
                <label htmlFor="stateProvince">State/Province</label>
                <input 
                  type="text" 
                  id="stateProvince" 
                  name="stateProvince" 
                  placeholder="State/Province" 
                  value={formData.stateProvince} 
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label htmlFor="postalCode">Postal/Zip Code</label>
                <input 
                  type="text" 
                  id="postalCode" 
                  name="postalCode" 
                  placeholder="Postal/Zip Code" 
                  value={formData.postalCode} 
                  onChange={handleChange}
                />
              </div>
            </fieldset>

            <fieldset>
              <legend>Emergency Contact Information</legend>
              <div className="form-row">
                <label htmlFor="emergencyFirstName">First Name</label>
                <input 
                  type="text" 
                  id="emergencyFirstName" 
                  name="emergencyFirstName" 
                  placeholder="First Name" 
                  value={formData.emergencyFirstName} 
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label htmlFor="emergencyLastName">Last Name</label>
                <input 
                  type="text" 
                  id="emergencyLastName" 
                  name="emergencyLastName" 
                  placeholder="Last Name" 
                  value={formData.emergencyLastName} 
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label htmlFor="emergencyRelationship">Relationship</label>
                <input 
                  type="text" 
                  id="emergencyRelationship" 
                  name="emergencyRelationship" 
                  placeholder="Relationship" 
                  value={formData.emergencyRelationship} 
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label htmlFor="emergencyContactNumber">Contact Number</label>
                <input 
                  type="text" 
                  id="emergencyContactNumber" 
                  name="emergencyContactNumber" 
                  placeholder="Contact Number" 
                  value={formData.emergencyContactNumber} 
                  onChange={handleChange}
                />
              </div>
            </fieldset>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
