// React
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Components
import Players from '../lobby/playerslist/PlayersList'
// import Results from '../results/Results'

// Style
import css from './host.module.css'

const Host = () => {
    const [ GAMECODE, SETGAMECODE ] = useState(12345)

    useEffect(() => {
        window.IO.on('gameCode', handleGameCode)
        window.IO.emit('hostGame');
        // setStartedSession(true)
        
    }, [])

    const handleGameCode = code => {
        SETGAMECODE(code)
    }

    const handleHostLeave = () => {
        window.IO.emit('hostLeaveGame', GAMECODE)
    }

    return (
        <div className={css.host_wrap}>
            {/* {hasStartedGame ? <Results /> :  */}
            <h2>Rock-Paper-Scissors-Royale!</h2>
            <div className={css.gamecode_wrap}>
                <h1 className={css.header}>Game Code: {GAMECODE}</h1>
                <Players />
            </div>
            <h4 style={{marginTop: '30px'}}>Start Game</h4>
            <Link onClick={handleHostLeave} style={{textDecoration: 'none'}} to={'/'}>
                <h4>Go Back</h4>
            </Link>
            <p className={css.warning}>(Warning: "Go Back" will remove all players from this match)</p>
        </div>

    )
}

export default Host