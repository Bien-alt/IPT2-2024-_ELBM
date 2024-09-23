import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home"
import AboutUs from "./Home"

export default function Routers() {
    return (
        <Router>
            <Routers>
                <Route path="/" elements={<Home/>}/>
                <Route path="/aboutus" element={<AboutUs/>}/>
                <Route path="/contactus" element={<ContactUs/>}/>
            </Routers>
        </Router>
    )
}

if (document.getElementById('root')) {
    ReactDom.render(<Routers />, document.getElementById('root'));
}