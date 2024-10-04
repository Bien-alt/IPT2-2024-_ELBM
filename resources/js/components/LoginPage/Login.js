import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../../../sass/components/_login.scss'; // Import the SCSS file
import logo from '../../../images/logo_1.png'; // Adjust the path to the image

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Add the 'login-page' class to the body to apply the background only to this page
  useEffect(() => {
    document.body.classList.add('login-page');

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove('login-page');
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError('Both fields are required');
    } else {
      setError('');
      console.log('Admin logged in:', { username, password });
      // Implement navigation logic here if needed
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img src={logo} alt="Saturnino College Logo" className="logo" /> {/* Logo */}
        <h2>Saturnino College Admin</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-icon username-icon">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-icon password-icon">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="eye-icon" onClick={toggleShowPassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <button type="submit" className="btn">Login</button>
          <p className="forgot-password">Forgot Password?</p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
