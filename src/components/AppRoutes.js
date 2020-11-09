// React
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import Home from './pages/home/Home'

const AppRoutes = () => {
    // useEffect(() => {
        window.IO.on('init', (msg) => {
            console.log(msg)
        });
        // console.log('ran IO', window.IO)
    //   }, [])
    return (
        <Router>
            <Route path={'/'} component={Home}/>
        </Router>
    )
}

export default AppRoutes