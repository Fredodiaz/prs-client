// React
import React, { useEffect, useState } from 'react'

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
            setPlayerAmount(players.length || 0) // players might be null and may error
        })
        // eslint-disable-next-line
    }, [])

    // Renders Players and Highlights Client Name
    const renderPlayers = () => {
        return PLAYERS.map(player => (
            <h1 className={`${css.game_player_cell} ${player.name === user.name ? css.highlight : ''}`} key={player.id}>{player.name}</h1>
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