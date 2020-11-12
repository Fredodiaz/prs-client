// React
import React, { Fragment, useEffect, useState } from 'react'

// Components
import Players from '../lobby/playerslist/PlayersList'
// import Results from '../results/Results'

// Style
import css from './host.module.css'

const Host = () => {
    const [ startedSession, setStartedSession ] = useState(false)
    const [ hasStartedGame, setHasStartedGame ] = useState(false)
    const [ GAMECODE, SETGAMECODE ] = useState(12345)

    useEffect(() => {
        window.IO.on('gameCode', handleGameCode)
        
    }, [])

    const handleGameCode = code => {
        SETGAMECODE(code)
    }


    const handleSelectedHostGame = () => {
        window.IO.emit('hostGame');
        setStartedSession(true)
    }


    return (
        <div className={css.host_wrap}>
            {/* {hasStartedGame ? <Results /> :  */}
            <Fragment>
                <h2>Hand Battle Royale!</h2>
                {!startedSession ? <h4 onClick={() => handleSelectedHostGame()}>Host Game</h4> : null}
                {!startedSession ? null : 
                <div className={css.gamecode_wrap}>
                    <h1 className={css.header}>Game Code: {GAMECODE}</h1>
                    <Players />
                </div>
                }
                {startedSession ? <h4 style={{marginTop: '30px'}} onClick={() => setHasStartedGame(true)}>Start Game</h4> : null}
            </Fragment>
        </div>

    )
}

export default Host