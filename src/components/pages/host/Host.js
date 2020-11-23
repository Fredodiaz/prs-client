// React
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'

// Components
import Players from '../lobby/playerslist/PlayersList'

// Style
import css from './host.module.css'

const Host = (props) => {
    const { game } = props

    const [ GAMECODE, SETGAMECODE ] = useState(12345)

    useEffect(() => {
        window.IO.on('gameCode', handleGameCode)
        window.IO.on('startedGame')
        window.IO.emit('hostGame');
    }, [])

    const handleGameCode = code => {
        SETGAMECODE(code)
    }

    const handleHostLeave = () => {
        window.IO.emit('hostLeaveGame', GAMECODE)
    }

    const handleHostStartGame = () => {
        if(game.players.length < 2) {
            alert('Must need at least two players to start the game')
        } else {
            window.IO.emit('hostStartedGame');
        }
    }

    return (
        <div className={css.host_wrap}>
            {/* {hasStartedGame ? <Results /> :  */}
            <h2>Rock-Paper-Scissors-Royale!</h2>
            <div className={css.gamecode_wrap}>
                <h1 className={css.header}>Game Code: {GAMECODE}</h1>
                <Players />
            </div>
            <h4 className={css.start_game} onClick={() => handleHostStartGame()}>Start Game</h4>
            <Link onClick={handleHostLeave} style={{textDecoration: 'none'}} to={'/'}>
                <h4>Go Back</h4>
            </Link>
            <p className={css.warning}>(Warning: "Go Back" will remove all players from this match)</p>
        </div>
    )
}

const mapStateToProps = state => ({
    game: state.game
})

export default connect(mapStateToProps, {})(Host)