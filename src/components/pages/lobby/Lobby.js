// React
import React, { useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'

// Actions
import { setCurrentRoom, setJoinedGame } from '../../../actions/userActions'

// Components
import Players from './playerslist/PlayersList'

// Style
import css from './lobby.module.css'

const Lobby = (props) => {
    const { user, setCurrentRoom, setJoinedGame } = props

    // const [ leftLobby, setLeftLobby ] = useState(false)

    useEffect(() => {
        window.IO.on('lobbyRemoved', () => {
            alert('Host left your Game')
            handleLeaveLobby()
        })
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
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { setCurrentRoom, setJoinedGame })(Lobby)