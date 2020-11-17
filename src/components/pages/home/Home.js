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
    const [code, setCode] = useState(0)


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
            setTimeout(() => {
                setJoinError(false)
            }, 2000)
            setCurrentRoom('')
        }
    }

    /* Sends Server Game Code */
    const attemptJoinGame = () => {
        window.IO.emit('joinGame', code)
        setCurrentRoom(code)
    }

    return (
        <div >
            <div className={css.banner_text}>
                <h2>Rock-Paper-Scissors-Royale!</h2>
                <div className={css.game_options}>
                    <Link style={{marginBottom: '20px'}} to={'/host'}>
                        <h4>Host Game</h4>
                    </Link>
                    {joinError ? <p>Invalid Code!</p> : null}
                    

                    <h4 onClick={() => attemptJoinGame()}>Join Game</h4>
                    <input onChange={(e) => toggleCodeChange(parseInt(e.target.value) || 0)} value={code} />
                    <h6>Welcome MightyDeer12</h6>

                    {user.hasJoinedGame ? <Redirect to={'/lobby'}/> : null}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { setCurrentRoom, setJoinedGame, setUserName })(Home)