// React
import React, { useEffect, useState } from 'react'

// Redux
import { connect } from 'react-redux'

// Actions
import { setBothPlayersChoice, setCurrentChoice, setScore } from '../../../../actions/userActions'

// Components
import Results from './result/Results'
import Scoreboard from './scoreboard/Scoreboard'
import Timer from './timer/Timer'

// Style
import css from './platform.module.css'

// Icons
import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from 'react-icons/fa'

const Platform = (props) => {
    const { user, setCurrentChoice, setScore, setBothPlayersChoice } = props

    const [ optionSelected, setOptionSelected ] = useState(false)
    const [ styles, setStyles ] = useState({op1: '', op2: '', op3: ''})

    useEffect(() => {
        let unmounted = false;

        
        window.IO.on('receiveCurrentMove', () => {
            if(!unmounted) {
                handleChoiceMade()
            }
        })
        window.IO.on('pointUpdate', (userPoints, oppPoints, status, userMove, oppMove) => {
            if(!unmounted) {
                setScore(userPoints, oppPoints, status)
                setBothPlayersChoice(userMove, oppMove)
                setOptionSelected(true)
                setTimeout(() => {
                    setOptionSelected(false)
                    window.IO.emit('matchedAndReadyToBattle')
                }, 3000)
                
            }
        })


        return () => { unmounted = true };
        // eslint-disable-next-line
    }, [])

    /* When Move Is Selected Show Pop Up Of That Move */
    const handleSelection = (selection, objNum) => {
        console.log('Selected:', selection)
        setCurrentChoice(selection)
        setStyles({...{op1: '', op2: '', op3: ''}, [objNum]: css.option_clicked})
    }

    // const handleTimerEnd = () => {
    //     console.log('TIME OVER', user.currentChoice)
    //     window.IO.emit('handleMoveEnd')
    // }

    const handleChoiceMade = () => {
        let selection = ''        

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
        setStyles({op1: '', op2: '', op3: ''})
    }

    return (
        <div className={css.platform_wrap}>
            <Scoreboard />

            <div className={css.options_wrap}>
                <div onClick={() => handleSelection('paper', 'op1')} className={`${css.individual_option} ${styles.op1}`}><FaRegHandPaper /></div>
                <div onClick={() => handleSelection('rock', 'op2')} className={`${css.individual_option} ${styles.op2}`}><FaRegHandRock /></div>
                <div onClick={() => handleSelection('scissors', 'op3')} className={`${css.individual_option} ${styles.op3}`}><FaRegHandScissors /></div>
            </div>

            {optionSelected && !user.hasWon ? <Results /> : null}

            <div className={css.timer_wrap}>
                <Timer onTimerEnd={() => handleChoiceMade()} duration={10}/>
            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    game: state.game,
    user: state.user
})

export default connect(mapStateToProps, { setCurrentChoice, setScore, setBothPlayersChoice })(Platform)