// React
import React from 'react'

// Styles
import css from './scoreboard.module.css'

const Scoreboard = () => {
    const playerScore = 2;
    const opponentScore = 1;

    return (
        <div className={css.scoreboard_wrap}>
            <h1 className={css.score_text}>{playerScore} - {opponentScore}</h1>
            <h2 className={css.identifier_left}>You</h2>
            <h2 className={css.identifier_right}>Opp</h2>
        </div>
    )
}

export default Scoreboard