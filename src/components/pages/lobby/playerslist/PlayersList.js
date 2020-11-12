// React
import React, { Fragment, useEffect, useState } from 'react'

// Redux
import { connect } from 'react-redux'

// Style 
import css from './playerslist.module.css'

const PlayersList = (props) => {
    const { user } = props

    const [ PLAYERS, SETPLAYERS ] = useState([])
    const [ playerAmount, setPlayerAmount ] = useState(0)

    useEffect(() => {
        window.IO.on('refreshLobbyPlayers', (players) => {
            SETPLAYERS(players || PLAYERS)
            console.log("PLAYERS", PLAYERS, user)
        })
        window.IO.on('displayPlayersInLobby', handleDisplayPlayersInLobby)
        // eslint-disable-next-line
    }, [])

    const handleDisplayPlayersInLobby = (numOfPlayers) => {
        console.log(numOfPlayers, 'PLAYERS')
        setPlayerAmount(numOfPlayers)
    }

    const renderPlayers = () => {
        return PLAYERS.map(player => (
            <Fragment>
                {console.log(user, 'USERRRRRRRRRRRRRR')}
                <h1 className={`${css.game_player_cell} ${player.name === user.name ? css.highlight : ''}`} key={player.id}>{player.name}</h1>
            </Fragment>
            
        ))
    }

    return (
        <div className={css.player_list_wrap}>
            <h1 className={css.header}>Players: {playerAmount || 0}</h1>
            <div className={css.game_players_wrap}>
                {renderPlayers()}
            </div>            
        </div>

    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(PlayersList)