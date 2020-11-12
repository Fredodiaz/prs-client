// React
import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Players from './playerslist/PlayersList'

// Style
import css from './lobby.module.css'

const Lobby = () => {
    return (
        <div className={css.lobby_wrap}>
            <Players />
            <Link to={'/'}>
                <h1 className={css.temp}>Go Back Home</h1>
            </Link>
        </div>
    )
}

export default Lobby