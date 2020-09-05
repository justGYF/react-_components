import React from 'react'
import layout from './layout.module.scss'
import { Link } from 'react-router-dom'
import routeList from '../router'

const name = 'layout'
console.log(routeList)

class routeNav extends React.Component {
    render () {
        return (
            <div className={layout[`${name}-routeNav`]}>
                {
                    routeList.map((item, index) => (
                        <li key={item.label}>
                            <span>{index + 1}.</span>
                            <Link to={item.path}>{item.label}</Link>
                        </li>
                    ))    
                }
            </div>
        )
    }
}

export default routeNav