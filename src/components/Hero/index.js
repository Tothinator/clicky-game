import React from "react";
import vid from "./synthwave_loop.mp4";
import "./style.css";

function Hero() {
    return (
        <div className="jumbotron text-center">
            <video id="hero-vid" autoPlay loop muted>
                <source src={vid} type="video/mp4"></source>
            </video>
            <div className="caption">
                <h1>Click Fury</h1>
                <h3>Click on images to earn points, but don't click on any of them more than once!</h3>
                {/* <button className="btn btn-primary" data-toggle="modal" data-target="#winModal">Modal</button> */}
            </div>
        </div>
    );
}

export default Hero;