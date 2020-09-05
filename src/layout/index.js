import React from 'react'
import layout from './layout.module.scss'
import Header from './header.js'
import RouteNav from './routeNav.js'
import Content from './content'
import { BrowserRouter as Router } from 'react-router-dom'

const name = 'layout'

class Layout extends React.Component {
    render () {
        return (
            <div className={layout[name]}>
                <Router>
                    <Header></Header>
                    <RouteNav></RouteNav>
                    <Content></Content>
                </Router>
            </div>
        )
    }
}

export default Layout