import React from "react";
import "./style.css";

function WinModal(props) {

    return (
        <div className="modal fade" id="winModal" tabIndex="-1" role="dialog" aria-labelledby="winModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header glow">
                        <h5 className="modal-title" id="winModalLabel">You won!</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>You've gotten the highest possible score! Congrats!</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WinModal;