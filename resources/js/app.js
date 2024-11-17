import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./components/Page1";

require("./bootstrap");
require("./Routers");

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar visibility
  };

  return (
    <Router>
      <div className="app-container">
        {/* Sidebar Component - receives isOpen as a prop */}
        <Sidebar isOpen={isSidebarOpen} />

        <div className="main-content">
          {/* TopNavbar component with toggleSidebar function passed as a prop */}
          <TopNavbar toggleSidebar={toggleSidebar} />

          {/* Define your Routes */}
          <Routes>
            <Route path="/page1" element={<Page1 />} />
            {/* Other routes */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
