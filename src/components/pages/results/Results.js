// React
import React from 'react'

// Styles
import css from './results.module.css'

const Results = () => {
    return (
        <div className={css.results_wrap}>
            <h1 className={css.temp}>Winning Match</h1>
            <div>Gerald 1:3 Jill</div>
            <h1 className={css.temp}>Ongoing Battles</h1>
            <div>Gustavo 0:1 Yami</div>
            <h1 className={css.temp}>Matches Done</h1>
            <div>Hailey 0:1 Sam</div>
        </div>
    )
}

export default Results