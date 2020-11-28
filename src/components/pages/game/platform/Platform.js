// React
import React, { useEffect, useState } from 'react'

// Redux
import { connect } from 'react-redux'

// Actions
import { setCurrentChoice } from '../../../../actions/userActions'

// Components
import Results from './result/Results'
import Scoreboard from './scoreboard/Scoreboard'
import Timer from './timer/Timer'

// Style
import css from './platform.module.css'

// Icons
import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from 'react-icons/fa'

const Platform = (props) => {
    const { user, setCurrentChoice } = props

    const [ optionSelected, setOptionSelected ] = useState(false)

    useEffect(() => {
        window.IO.on('receiveCurrentMove', handleChoiceMade)

    }, [])

    /* When Move Is Selected Show Pop Up Of That Move */
    const handleSelection = (selection) => {
        console.log('Selected:', selection)
        setCurrentChoice(selection)
    }

    const handleTimerEnd = () => {
        console.log('TIME OVER', user.currentChoice)
        window.IO.emit('handleMoveEnd')
    }

    const handleChoiceMade = () => {
        // setCounter(counter + 1)
        let selection = ''
        console.log('GIVEN CHOICE:', user.currentChoice, user.currentChoice === '')
        

        if(user.currentChoice === '') {
            let val = Math.floor(Math.random() * Math.floor(3)); // 0, 1 or 2
            switch(val) {
                case 0: selection = 'rock'
                    break
                case 1: selection = 'paper'
                    break
                case 2: selection = 'scissors'
                    break
                default: selection = 'rock'
                    break
            }
            window.IO.emit('sendCurrentChoice', selection)
        } else {
            window.IO.emit('sendCurrentChoice', user.currentChoice)
        }

        setCurrentChoice('')
    }

    return (
        <div className={css.platform_wrap}>
            <p style={{textAlign: 'center'}}>Your username is {user.name}</p>
            <p style={{textAlign: 'center'}}>Your opponent is {user.opponent.name}</p>

            <Scoreboard />

            <div className={css.options_wrap}>
                <div onClick={() => handleSelection('paper')} className={css.individual_option}><FaRegHandPaper /></div>
                <div onClick={() => handleSelection('rock')} className={css.individual_option}><FaRegHandRock /></div>
                <div onClick={() => handleSelection('scissors')} className={css.individual_option}><FaRegHandScissors /></div>
            </div>

            {optionSelected ? <Results /> : null}
            
            <div className={css.timer_wrap}>
                Make a move or one will be made for you!
                
                <Timer onTimerEnd={() => handleChoiceMade()} duration={10}/>

                <button onClick={() => handleChoiceMade()}>
                    Check Choice
                </button>
            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    game: state.game,
    user: state.user
})

export default connect(mapStateToProps, { setCurrentChoice })(Platform)