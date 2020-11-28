// React
import React, { useEffect, useState } from 'react'

// Timer
import { useTimer } from 'react-timer-hook';

// Components
import CountdownTimer from './countdowntimer/CountdownTimer';

// Style
import css from './timer.module.css'


const Timer = (props) => {

    const { onTimerEnd, duration } = props

    const [ isPlaying, setIsPlaying ] = useState(true)
    const [ hideTimer, setHideTimer ] = useState(false)

    const { 
        seconds,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp: 100, onExpire: () =>  handleTimerEnd()});
        
    useEffect(() => {
        handleRestart(duration + 2)
        // eslint-disable-next-line
    }, [])

    const handleTimerEnd = () => {
        console.warn('Timer Ended')
        onTimerEnd()
        // setTimeout(() => {
            setHideTimer(true)
        // }, 0)
    }

    const handleRestart = (numOfSeconds) => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + numOfSeconds);

        restart(time)
        setIsPlaying(!isPlaying)
        setHideTimer(false)
    }

    const handleSecondsChange = () => {
        if(seconds === 2) {
            pause()
            
            setTimeout(() => {
                resume()
            }, 0)
        }
        return seconds
    }
    
    return (
        <div className={css.timer_wrap}>

            <div className={`${hideTimer ? css.hide : ''}`}>
                <CountdownTimer duration={duration + 2} isPlaying={isPlaying} />
            </div>
            <p className={css.hide}>{`${handleSecondsChange()}s`}</p>
            <button onClick={() => handleRestart(duration + 2)}>Restart</button>
        </div>
    )
}



export default Timer