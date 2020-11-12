// React
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'

// Actions
import { setUserName } from '../../../actions/userActions'

// Styles
import css from './home.module.css'

const Home = (props) => {
    const { setUserName } = props
    const [code, setCode] = useState(0)
    const [ joinError, setJoinError ] = useState(false)
    const [ joinSuccess, setJoinSuccess ] = useState(false)

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
            setJoinSuccess(true)
            setUserName(isClientJoined)
        } else {
            setJoinError(true)
            setTimeout(() => {
                setJoinError(false)
            }, 2000)
        }
    }

    /* Sends Server Game Code */
    const attemptJoinGame = () => {
        window.IO.emit('joinGame', code)
        console.log('CODE', code)
    }

    return (
        <div >
            <div className={css.banner_text}>
                <h2>Hand Battle Royale!</h2>
                <div className={css.game_options}>
                    <h4 onClick={() => attemptJoinGame()}>Join Game</h4>
                    <input onChange={(e) => toggleCodeChange(parseInt(e.target.value) || 0)} value={code} />
                    {joinError ? <p>Invalid Code!</p> : null}
                    <h6>Welcome MightyDeer12</h6>
                    <h6>(Randomly Generated Names)</h6>
                    {joinSuccess ? <Redirect to={'/lobby'}/> : null}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { setUserName })(Home)