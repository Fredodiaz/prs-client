// React
import React, { useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'

// Actions
import { setCurrentRoom, setIsUserInGame, setJoinedGame } from '../../../actions/userActions'

// Components
import Players from './playerslist/PlayersList'

// Style
import css from './lobby.module.css'

const Lobby = (props) => {
    const { user, setCurrentRoom, setIsUserInGame, setJoinedGame } = props

    useEffect(() => {
        window.IO.on('lobbyRemoved', () => {
            alert('Host left your Game')
            handleLeaveLobby()
        })

        window.IO.on('startedGame', () => setIsUserInGame(true)) // Redirects to /game if user is in one

        // /* TEMP FIX: Can't register this func startround after redirect to game, so adding this before redirect */
        // window.IO.on('startedNewRound', () => {
        //     window.IO.emit('findPlayerOpponent')
        // })
        // eslint-disable-next-line
    }, [])

    const handleLeaveLobby = () => {
        window.IO.emit('leaveLobby')
        setCurrentRoom('')
        setJoinedGame(false)
    }

    return (        
        <div className={css.lobby_wrap}>
            <h2>Rock-Paper-Scissors-Royale!</h2>
            <Players />
            <Link onClick={handleLeaveLobby} to={'/'}>
                <h4 className={css.lobby_button}>Leave Game</h4>
            </Link>
            <p className={css.warning}>(Warning: "Leave Game" will remove you from this match)</p>
            {!user.hasJoinedGame ? <Redirect to={'/'}/> : null}
            {user.isInGame ? <Redirect to={'/game'}/> : null}
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { setCurrentRoom, setIsUserInGame, setJoinedGame })(Lobby)