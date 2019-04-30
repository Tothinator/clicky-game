import React from "react";
import "./style.css";

function GameCard(props) {

    const deck = props.items.map(gif => 
        <div className="col-md-4 col-sm-6 col-12 card click-item" key={gif.id} id={gif.id} style={ {
            backgroundImage: `url(${gif.image})`,
            backgroundSize: "cover"
        } }>
        </div>
    )

    return (
        <div className="container">
            <div className="row justify-content-center">
                {deck}
            </div>
        </div>
    )
}

export default GameCard;