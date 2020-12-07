// React
import React, { useEffect, useState } from 'react'

// Redux
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// Styles
import css from './results.module.css'

const Results = (props) => {
    const { user } = props

    // eslint-disable-next-line
    const [ name, setName ] = useState('')

    useEffect(() => {
        window.IO.on('winnerOfMatch', (nameOfWinner) => {
            setName(nameOfWinner)
        })
    }, [])

    return (
        <div className={css.results_wrap}>
            {user.hasWon ? <h1 className={css.temp}>You are the Winner!</h1> : null}
            {!user.hasWon ? <h1 className={css.temp}>You were eliminated, thank you for playing!</h1> : null}
            {!user.isInGame ? <Redirect to={'/lobby'}/> : null}
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, {})(Results)