// React
import React, { useEffect } from 'react'

// Redux
import { connect } from 'react-redux'

// Icons
// eslint-disable-next-line
import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from 'react-icons/fa'

// Styles
import css from './results.module.css'

const Results = (props) => {
    const { user } = props

    useEffect(() => {
        
        // eslint-disable-next-line
    }, [])

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
                <p>{user.opponent.name}</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, {})(Results)