import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";

import Example from "./Example";
import AboutUs from "./AboutUs";

export default function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Example />} />
                <Route path="about-us" element={<AboutUs />} />
            </Routes>
        </Router>
    );

}

if (document.getElementById("root")) {
    ReactDOM.render(<Routers />, document.getElementById("root"));
}