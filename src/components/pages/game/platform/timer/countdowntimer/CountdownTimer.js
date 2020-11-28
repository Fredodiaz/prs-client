// React
import React from 'react'

// Timer
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

// Styles
// import { css } from './countdowntimer.module.css'



const CountDownTimer = (props) => {
    const { duration, isPlaying } = props


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
        <div>
            <CountdownCircleTimer
                key={isPlaying} isPlaying duration={duration - 3} size={120} strokeWidth={12}
                colors={[["#003415", .25], ["#c3f53c", 0.25], ["#F7B801", 0.25], ["#A30000"]]}
            >
                {renderTime}
            </CountdownCircleTimer>

        </div>
    )
}


export default CountDownTimer