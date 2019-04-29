import React from "react";
import "./style.css";

function Navbar(props) {

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <nav className="navbar-brand">
                    <h1 href="/">Clicky Game</h1>
                </nav>
                <nav className="text-center">
                    <h2>Click an image to begin!</h2>
                </nav>
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