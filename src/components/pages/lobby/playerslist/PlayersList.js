// React
import React, { Fragment } from 'react'

// Redux
import { connect } from 'react-redux'

// Style 
import css from './playerslist.module.css'

const PlayersList = (props) => {
    const { game, user, isHost } = props
    
    // useEffect(() => {
    //     // window.IO.on('refreshLobbyPlayers', (players) => {
    //     // })
    //     // eslint-disable-next-line
    // }, [])

    // Renders Players and Highlights Client Name
    const renderPlayers = () => {
        return game.players.map(player => (
            <Fragment>
                {isHost ? <h1 onClick={() => window.IO.emit('hostRemovePlayer', player.id)} className={`${css.game_player_cell} ${css.host_editable}`} key={player.id}>{player.name}</h1> : 
                <h1 className={`${css.game_player_cell} ${player.id === user.name ? css.highlight : ''}`} key={player.id}>{player.name}</h1>
                }
            </Fragment>
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