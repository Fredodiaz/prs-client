// React
import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'

// Actions
import { setPlayerOpponent } from '../../../actions/userActions'

// Components
import Platform from './platform/Platform'

// Styles
import css from './game.module.css'
import { Redirect } from 'react-router-dom'

const Game = (props) => {
    // eslint-disable-next-line
    const { game, user, setPlayerOpponent } = props
    

    const [ displayGame, setDisplayGame ] = useState(false)

    const [ style, setStyle ] = useState('')
    const [ text, setText ] = useState('')

    useEffect(() => {
        window.IO.on('receivePlayerOpponent', handleReceivedOpponent)
        window.IO.emit('findPlayerOpponent')
        //eslint-disable-next-line
    }, [])

    const handleReceivedOpponent = (opponent) => {
        console.log('OPPONENT', opponent)
        setPlayerOpponent(opponent)

        handleNewGame(opponent.name)
        setTimeout(() => {
            setDisplayGame(true)
        }, 9000)
    }

    const handleNewGame = (val) => {
        handleNewPhrase('Starting Game!')
        setTimeout(() => {
            handleNewPhrase('Finding Opponent!')
        }, 3000)
        setTimeout(() => {
            handleNewPhrase(`You vs ${val}`)
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
            
            {displayGame ? <Platform /> : null}
            <div className={css.text_popup_wrap}>
                <h1 className={`${css.text_popup} ${style}`}>{text}</h1>
            </div>

            {!user.isInGame ? <Redirect to={'/lobby'}/> : null}
        </div>
    )
}

const mapStateToProps = state => ({
    game: state.game,
    user: state.user,
})

export default connect(mapStateToProps, { setPlayerOpponent })(Game)