import React from "react";
import vid from "./synthwave_loop.mp4";
import "./style.css";

function Hero() {
    return (
        <div className="jumbotron text-center">
            {/* <video id="background-vid" autoPlay loop muted>
                <source id="synthwave-loop" src={vid} type="video/mp4"></source>
            </video> */}
            <div className="caption">
                <button className="btn btn-primary" data-toggle="modal" data-target="#winModal">Modal</button>
            </div>
        </div>
    );
}

export default Hero;