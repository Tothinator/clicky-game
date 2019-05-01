import React from "react";
import MiddleTitle from "../MiddleTitle";
import "./style.css";

function Navbar(props) {

    return (
        <nav className="navbar fixed-top navbar-dark bg-dark">
            <div className="container">
                <nav className="navbar-brand">
                    <h1 href="/">Click Fury</h1>
                </nav>
                <MiddleTitle 
                    lose={props.lose}
                    win={props.win}
                />
                <ul className="nav">
                    <li className="nav-item">
                        <h3>Score: {props.score}</h3>
                    </li>
                    <h3 id="navbar-break">|</h3>
                    <li className="nav-item">
                        <h3>Top Score: {props.topScore}</h3>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;