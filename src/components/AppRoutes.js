// React
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import Game from './pages/game/Game'
import Home from './pages/home/Home'
import Host from './pages/host/Host'
import Lobby from './pages/lobby/Lobby'
import Results from './pages/results/Results'

// Images
import Logo from '../assets/logo.png'

// Style
import css from './approutes.module.css'




const AppRoutes = () => {
    
    // useEffect(() => {
        window.IO.on('init', (msg) => {
            console.log(msg)
        });
        // console.log('ran IO', window.IO)
    //   }, [])

    return (
        <Router>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/lobby'} component={Lobby}/>
            <Route exact path={'/host'} component={Host}/>
            <Route exact path={'/game'} component={Game}/>
            <Route exact path={'/results'} component={Results}/>

            <Route exact path={['/', '/lobby', '/host', '/results']} render={() => (
                <div className={css.area} >
                    <ul className={css.circles}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div >
            )}/>

            <img className={css.temp} alt={'Logo'} src={Logo}/>
        </Router>
    )
}

export default AppRoutes