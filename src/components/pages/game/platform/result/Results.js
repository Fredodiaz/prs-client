// React
import React, { useEffect } from 'react'

// Icons
import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from 'react-icons/fa'

// Styles
import css from './results.module.css'

const Results = () => {
    useEffect(() => {
        
    })

    return (
        <div className={css.results_wrap}>
            <div className={css.individual_option_wrap}>
                <div className={css.individual_option}><FaRegHandPaper /></div>
                <p>You</p>
            </div>

            <div className={css.result}>
                <p>You Win!</p>
            </div>

            <div className={css.individual_option_wrap}>
                <div className={css.individual_option}><FaRegHandScissors /></div>
                <p>Opponent</p>
            </div>
        </div>
    )
}

export default Results