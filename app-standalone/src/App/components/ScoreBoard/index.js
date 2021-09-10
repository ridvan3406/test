import React from 'react'

export default function index(props) {
    console.log(props)
    //when players win the score will be updated each and every time.
    return (
        <div className="scoreboard">
            <p>Player 1: <span>{props.score.X}</span></p>
            <p>Player 2: <span>{props.score.O}</span></p>
            
        </div>
    )
}
