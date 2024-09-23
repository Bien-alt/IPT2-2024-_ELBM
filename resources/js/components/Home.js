import React from "react";
import { link }from "react-router-dom";

export default function Home(){
    return (
        <div className="Home">
            <link to="/">Home</link> <br/>
            <link to="/about">About</link> <br/>
            <link to="/contact">Contact</link> <br/>
            <h1>Home</h1>
        </div>
    );
}