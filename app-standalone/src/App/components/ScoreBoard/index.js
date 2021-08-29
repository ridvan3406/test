import React from 'react'

export default function index(props) {
    console.log(props)
    return (
        <div>
            <p>Player X:<span>{props.score.X}</span></p>
            <p>Player Y:<span>{props.score.O}</span></p>
            <button className="score-button" onClick={props.handlePlayAgain}>Play Again</button>
        </div>
    )
}
