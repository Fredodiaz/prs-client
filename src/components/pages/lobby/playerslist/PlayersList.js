// React
import React from 'react'

// Redux
import { connect } from 'react-redux'

// Style 
import css from './playerslist.module.css'

const PlayersList = (props) => {
    const { game, user } = props
    
    // useEffect(() => {
    //     // window.IO.on('refreshLobbyPlayers', (players) => {
    //     // })
    //     // eslint-disable-next-line
    // }, [])

    // Renders Players and Highlights Client Name
    const renderPlayers = () => {
        return game.players.map(player => (
            <h1 className={`${css.game_player_cell} ${player.name === user.name ? css.highlight : ''}`} key={player.id}>{player.name}</h1>
        ))
    }

    return (
        <div className={css.player_list_wrap}>
            <h1 className={css.header}>Players: {game.players.length || 0}</h1>
            <div className={css.game_players_wrap}>
                {renderPlayers()}
            </div>            
        </div>

    )
}

const mapStateToProps = state => ({
    game: state.game,
    user: state.user
})

export default connect(mapStateToProps)(PlayersList)