// React
import React, { useState } from 'react'

// Redux
import { connect } from 'react-redux'

// Components
import Results from './result/Results'
import Scoreboard from './scoreboard/Scoreboard'

// Style
import css from './platform.module.css'

// Icons
import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from 'react-icons/fa'

const Platform = (props) => {
    const { game, user } = props

    const [ optionSelected, setOptionSelected ] = useState(false)

    const handleSelection = () => {
        setOptionSelected(true)
        setTimeout(() => {
            setOptionSelected(false)
        }, 3000)
    }

    return (
        <div className={css.platform_wrap}>
            <p style={{textAlign: 'center'}}>Your username is {user.name}</p>
            <p style={{textAlign: 'center'}}>Your opponent is {user.opponent.name}</p>
            <Scoreboard />
            <div className={css.options_wrap}>
                <div onClick={() => handleSelection()} className={css.individual_option}><FaRegHandPaper /></div>
                <div onClick={() => handleSelection()} className={css.individual_option}><FaRegHandRock /></div>
                <div onClick={() => handleSelection()} className={css.individual_option}><FaRegHandScissors /></div>
            </div>
            {optionSelected ? <Results /> : null}
            
        </div>
    )
}

const mapStateToProps = state => ({
    game: state.game,
    user: state.user
})

export default connect(mapStateToProps, {})(Platform)