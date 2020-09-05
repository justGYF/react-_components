import React from 'react'
import layout from './layout.module.scss'

const name = 'layout'

class Header extends React.Component {
    render () {
        return (
            <div className={layout[`${name}-header`]}>
                React Components Test
            </div>
        )
    }
}

export default Header