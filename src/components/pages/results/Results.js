// React
import React, { useEffect, useState } from 'react'

// Redux
import { connect } from 'react-redux'

// Styles
import css from './results.module.css'

const Results = (props) => {
    const { user } = props

    const [ name, setName ] = useState('')

    useEffect(() => {
        window.IO.on('winnerOfMatch', (nameOfWinner) => {
            setName(nameOfWinner)
        })
    }, [])

    const renderTempVal = () => {
        return Math.floor(Math.random()*(999-100+1)+100);
    }

    return (
        <div className={css.results_wrap}>
            {user.hasWon ? <h1 className={css.temp}>You are the winner!</h1> : null}
            <h1 className={css.temp}>Winning Match</h1>
            <h6>{renderTempVal()} vs {renderTempVal()}</h6>
            <h1 className={css.temp}>Ongoing Battles</h1>
            <h6>{renderTempVal()} vs {renderTempVal()}</h6>
            <h1 className={css.temp}>Matches{renderTempVal()} Done</h1>
            <h6>{renderTempVal()} vs {renderTempVal()}</h6>
            {name !== '' ? <h1 className={css.temp}>{name} is the winner</h1> : null}
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, {})(Results)