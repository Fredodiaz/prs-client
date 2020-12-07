// React
import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'

// Actions
import { setPlayerOpponent, setHasLost, setHasWon, setScore } from '../../../actions/userActions'

// Components
import Platform from './platform/Platform'

// Styles
import css from './game.module.css'
import { Redirect } from 'react-router-dom'

const Game = (props) => {
    // eslint-disable-next-line
    const { user, setPlayerOpponent, setHasLost, setHasWon, setScore } = props
    
    const [ displayGame, setDisplayGame ] = useState(false)

    const [ style, setStyle ] = useState('')
    const [ text, setText ] = useState('')

    useEffect(() => {
        let unmounted = false;
        window.IO.on('startedNewMatch', () => {
            if(!unmounted && !user.hasWon) {
                window.IO.emit('findPlayerOpponent')
            }
        })
        window.IO.on('receivePlayerOpponent', (opponent, matchNumber) => {
            if(!unmounted && !user.hasWon && opponent) {
                handleReceivedOpponent(opponent, matchNumber)
            }
        })

        window.IO.on('handleLoss', () => {
            if(!unmounted) {
                setHasLost(true)
            }
        })

        window.IO.on('winnerOfMatch', () => {
            if(!unmounted) {
                setHasWon(true)
            }
        })

        return () => { unmounted = true };
        // window.IO.on('handleMove', handleMove())
        //eslint-disable-next-line
    }, [])


    /* Shows Player (10 Seconds) */
    const handleReceivedOpponent = (opponent, matchNumber) => {
        setScore(0, 0, '')
        setPlayerOpponent(opponent)
        handleNewMatch(opponent.name, matchNumber)
        setTimeout(() => {
            setDisplayGame(true)
            window.IO.emit('matchedAndReadyToBattle')
            console.log("STARTING MATCHING AND READY")
        }, 9000)
    }

    const handleNewMatch = (oppName, matchNumber) => {
        handleNewPhrase(`Starting Round ${matchNumber}!`)
        setTimeout(() => {
            handleNewPhrase('Finding Opponent!')
        }, 3000)
        setTimeout(() => {
            handleNewPhrase(`You vs ${oppName}`)
        }, 6000)
    }

    const handleNewPhrase = (phrase) => {
        setText(phrase)
        setStyle(css.text_show)
        setTimeout(() => {
            setStyle('')
        }, 2000)
    }

    return (
        <div className={css.game_wrap}>
            
            <div style={{display: displayGame ? 'initial' : 'none'}}>
                <Platform />    
            </div>
           
            <div className={css.text_popup_wrap}>
                <h1 className={`${css.text_popup} ${style}`}>{text}</h1>
            </div>

            {!user.isInGame ? <Redirect to={'/lobby'}/> : null}
            {user.hasLost ? <Redirect to={'/results'} /> : null}
            {user.hasWon ? <Redirect to={'/results'} /> : null}
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user,
})

export default connect(mapStateToProps, { setPlayerOpponent, setHasLost, setHasWon, setScore })(Game)