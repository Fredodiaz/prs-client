// React
import React from 'react'

// Redux
import { connect } from 'react-redux'

// Timer
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

// Styles
import css from './countdowntimer.module.css'



const CountDownTimer = (props) => {
    const { timer, duration } = props

    const renderTime = ({ remainingTime }) => {
        
        if (remainingTime === 0) {
            return <div className="timer">Times Up!</div>;
        }
      
        return (
          <div className="timer">
            <div className="value">{remainingTime}</div>
          </div>
        );
    };

    return (
        <div className={css.countdown_timer_wrap}>
            <CountdownCircleTimer
                key={timer.isPlaying} isPlaying duration={duration - 3} size={120} strokeWidth={12}
                colors={[["#003415", .25], ["#c3f53c", 0.25], ["#F7B801", 0.25], ["#A30000"]]}
            >
                {renderTime}
            </CountdownCircleTimer>
            <div className={css.white_bg}></div>
        </div>
    )
}

const mapStateToProps = state => ({
    timer: state.timer
})

export default connect(mapStateToProps)(CountDownTimer)