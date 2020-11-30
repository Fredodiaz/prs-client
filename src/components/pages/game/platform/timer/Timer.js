// React
import React, { useEffect, useState } from 'react'

// Redux
import { connect } from 'react-redux'

// Timer
import { useTimer } from 'react-timer-hook';

// Actions
import { setHideTimer, setIsPlaying } from '../../../../../actions/timerActions'

// Style
import css from './timer.module.css'


const Timer = (props) => {

    const { timer, onTimerEnd, duration, setIsPlaying, setHideTimer } = props

    const { 
        seconds,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp: 100, onExpire: () =>  handleTimerEnd()});
        
    useEffect(() => {
        let isMounted = true;
        pause() // prevents timer from accidentally going off before called
        window.IO.on('startTimer', () => {
            if(isMounted) handleRestart(duration + 2)
        })
        return () => { isMounted = false }
        // eslint-disable-next-line
    }, [])

    const handleTimerEnd = () => {
        console.warn('ENDTIMER')
        onTimerEnd()
        setHideTimer(true)
    }

    const handleRestart = (numOfSeconds) => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + numOfSeconds);

        restart(time)
        setIsPlaying(!timer.isPlaying)
        setHideTimer(false)
    }

    const handleSecondsChange = () => {
        let output = seconds - 2
        if(seconds === 2) {
            pause()
            setTimeout(() => {
                resume()
            }, 0)
        }
        if(output < 0) output = 0
        return output
    }
    
    return (
        <div className={css.timer_wrap}>
            {/* <button onClick={() => window.IO.emit('resetTheTimer')}>Restart</button> */}
            <div className={`${timer.hideTimer ? css.hide : ''}`}>
                <p>{`${handleSecondsChange()}s`}</p>
                <p className={css.warning}>Make a move or one will be made for you!</p>
                {/* <p className={css.hide}>{`${handleSecondsChange()}s`}</p> */}
                {/* <CountdownTimer duration={duration + 2} /> */}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    timer: state.timer
})

export default connect(mapStateToProps, {setIsPlaying, setHideTimer})(Timer)