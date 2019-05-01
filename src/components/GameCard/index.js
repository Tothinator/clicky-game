import React from "react";
import "./style.css";

function GameCard(props) {

    const hasNotLost = <div className="col-md-4 col-sm-6 col-12 card item" id={props.id} style={ {
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover"
    } } onClick={() => props.increment(props.id)}>
    </div>

    const hasLost = <div className="col-md-4 col-sm-6 col-12 card item shake" id={props.id} style={ {
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover"
    } } onClick={() => props.increment(props.id)}>
    </div>

    const hasWon = <div className="col-md-4 col-sm-6 col-12 card item win-card" id={props.id} style={ {
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover"
    } } onClick={() => props.increment(props.id)}>
    </div>

    if (props.win) {
        return hasWon;
    }

    return (
         props.lose ? hasLost : hasNotLost 
    )
}

export default GameCard;