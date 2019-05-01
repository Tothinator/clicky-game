import React from "react";
import "./style.css";

function MiddleTitle(props) {
    
    switch(props.lose) {
        case null:
            return (
                <div className="text-center game-message">
                    <h2>Click an image to begin!</h2>
                </div>
            );
        case false: 
            return (
                <div className="text-center game-message correct">
                    <h2>You guessed correctly!</h2>
                </div>
            );
        case true: 
            return (
                <div className="text-center game-message wrong">
                    <h2>You guessed incorrectly!</h2>
                </div>
            );
        default:
            return null;
    }
}

export default MiddleTitle;