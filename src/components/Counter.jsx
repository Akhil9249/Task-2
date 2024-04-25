import React from "react";
import "./Counter.css";

function Counter({ onIncrement, onDecrement, count, show }) {
    return (
        <div className="Counter-main-container">
            <div className="Counter-main-left">
                <div className="Counter-main-left-top">
                    <h1 onClick={onDecrement}>-</h1>
                    <div className="Counter-main-left-top-center">
                        <h1>{count}</h1>
                    </div>
                    <h1 onClick={onIncrement}>+</h1>
                </div>
                <div className="Counter-main-left-bottom">
                    <div
                        className="Counter-main-left-bottom-left"
                        style={show ? { background: "rgb(204, 179, 228)" } : { background: "rgb(240, 235, 245)" }}
                    >
                        <h1
                            onClick={onDecrement}
                            style={show ? { color: "rgb(250, 248, 248)" } : { color: "rgb(93, 93, 182)" }}
                        >
                            -
                        </h1>
                    </div>
                    <div
                        className="Counter-main-left-bottom-right"
                        style={show ? { background: "rgb(240, 235, 245)" } : { background: "rgb(204, 179, 228)" }}
                    >
                        <h1
                            onClick={onIncrement}
                            style={show ? { color: "rgb(93, 93, 182)" } : { color: " rgb(250, 248, 248)" }}
                        >
                            +
                        </h1>
                    </div>
                </div>
            </div>
            <div className="Counter-main-right">
                <div className="Counter-main-right-top">
                    <h1>INCREENT</h1>
                    <h1>DECREENT</h1>
                </div>
                <div className="Counter-main-right-bottom">
                    <h1>SHOWABLE</h1>
                    <h1>BUTTON</h1>
                </div>
            </div>
        </div>
    );
}

export default Counter;
