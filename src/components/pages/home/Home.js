// React
import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'

// Actions
import { setCurrentRoom, setJoinedGame, setUserName } from '../../../actions/userActions'

// Styles
import css from './home.module.css'

const Home = (props) => {
    const { user, setCurrentRoom, setJoinedGame, setUserName } = props

    const [ joinError, setJoinError ] = useState(false)
    const [ joinErrorMsg, setJoinErrorMsg ] = useState('')
    const [code, setCode] = useState(0)
    const [uName, setUName] = useState('')


    useEffect(() => {
        window.IO.on('handlePersonJoinAttempt', handleIfUserSuccesfulyJoined)
        // eslint-disable-next-line
    }, [])

    /* Handles Code Input: Doesn't Allow More Than 5 Values */
    const toggleCodeChange = (val) => {
        if(val <= 99999) {
            setCode(val)
        }
    }

    /* Determines If User Should Redirect To Lobby Based On Server Response */
    const handleIfUserSuccesfulyJoined = (isClientJoined) => {
        if(isClientJoined) {
            setUserName(isClientJoined)
            setJoinedGame(true)
        } else {
            setJoinError(true)
            setJoinErrorMsg('Invalid Code!')
            setTimeout(() => {
                setJoinError(false)
            }, 2000)
            setCurrentRoom('')
        }
    }

    /* Sends Server Game Code */
    const attemptJoinGame = () => {
        if(uName.length <= 4) {
            setJoinError(true)
            setJoinErrorMsg('Username must be more than 4 characters!')
            setTimeout(() => {
                setJoinError(false)
            }, 2000)
        } else if(uName.length >= 10){
            setJoinError(true)
            setJoinErrorMsg('Username must be less than 10 characters!')
            setTimeout(() => {
                setJoinError(false)
            }, 2000)
        } else {
            window.IO.emit('joinGame', code, uName)
            setCurrentRoom(code, uName)
        }
    }

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    return (
        <div className={css.home_wrap}>
            <h2>Rock-Paper-Scissors-Royale!</h2>
            <div className={css.game_options}>
                <Link style={{marginBottom: '20px'}} to={'/host'}>
                    <h4>Host Game</h4>
                </Link>
                {joinError ? <p>{joinErrorMsg}</p> : null}
                
                <input placeholder={'Username'} onChange={(e) => setUName(capitalize(e.target.value))} value={uName} />

                <h4 onClick={() => attemptJoinGame()}>Join Game</h4>
                <input onChange={(e) => toggleCodeChange(parseInt(e.target.value) || 0)} value={code} />

                {/* <h6>Welcome MightyDeer12</h6> */}
                {user.hasJoinedGame ? <Redirect to={'/lobby'}/> : null}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { setCurrentRoom, setJoinedGame, setUserName })(Home)