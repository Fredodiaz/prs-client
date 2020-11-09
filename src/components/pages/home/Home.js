// React
import React, { Fragment, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom'

// Components
import Game from '../home/game/Game'

// Styles
import css from './home.module.css'

const Home = () => {
    const GAMECODE = 69420
    const [code, setCode] = useState(0)
    const [ joinError, setJoinError ] = useState(false)
    const [ joinSuccess, setJoinSuccess ] = useState(false)

    // Resets Join Session
    useEffect(() => {
        setJoinSuccess(false)
    }, [])

    const toggleCodeChange = (e) => {
        if(e.target.value <= 99999) {
            setCode(e.target.value)
        }
        console.log(joinSuccess)
    }

    const toggleJoin = () => {
        if(parseInt(code) === 69420) {
            setJoinSuccess(true)

        } else {
            setJoinError(true)
            setTimeout(() => {
                setJoinError(false)
            }, 2000)
        }
    }

    return (
        <div >
            <div className={css.banner_text}>
                <Router basename={'/'}>
                    <Link to={'/game'}>
                    <h2>Hand Battle Royale!</h2>
                    </Link>
                    <div className={css.game_options}>

                        <Route exact path={'/'} render={() => (
                            <Fragment>
                                <h4 onClick={() => toggleJoin()}>Join Game</h4>
                                <input onChange={(e) => toggleCodeChange(e)} value={code} />
                            </Fragment>
                        )}/>
                        <Route exact path={'/host'} render={() => (
                            <h3 className={css.code}>{`Your Code: ${GAMECODE}`}</h3>
                        )}/>
                        <Route exact path={'/game'} render={() => (
                            <Fragment>
                                <Game />
                                <Link to={'/host'}>
                                    <h2>Host Game!</h2>
                                </Link>
                            </Fragment>
                        )}/>

                        {joinSuccess ? <Redirect to={'/game'}/> : null}
                        
                        {joinError ? <p>Invalid Code!</p> : null}
                    </div>
                </Router>
            </div>
            <div className={css.animation_area}>
                <ul className={css.box_area}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

        </div>
    )
}

export default Home