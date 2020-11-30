// React
import React from 'react'

// Redux
import { connect } from 'react-redux'

// Styles
import css from './scoreboard.module.css'

const Scoreboard = (props) => {
    const { user } = props

    return (
        <div className={css.scoreboard_wrap}>
            <h1 className={css.score_text}>{user.score.user} - {user.score.opponent}</h1>
            <h2 className={css.identifier_left}>You</h2>
            <h2 className={css.identifier_right}>Opp</h2>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, {})(Scoreboard)