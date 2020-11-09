// React
import React from 'react'
import { Link } from 'react-router-dom'

// Style
import css from './game.module.css'

const Game = () => {
    return (
        <div className={css.game_wrap}>
            <Link to={'/'}>
                <h1>Home</h1>
            </Link>
        </div>
    )
}

export default Game