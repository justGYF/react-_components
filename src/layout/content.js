import React from 'react'
import layout from './layout.module.scss'
import { Switch, Route } from 'react-router-dom'
import routeList from '../router'

const name = 'layout'

class Content extends React.Component {
    render () {
        return (
            <div className={layout[`${name}-content`]}>
                <Switch>
                    <Route path="/" exact>
                        <div className={layout[`${name}-content-visible`]}>
                            HOMEPAGE
                        </div>       
                    </Route>
                    {
                        routeList.map(item => (
                            <Route path={item.path} component={item.comp} key={item.label}></Route>
                        ))
                    }
                </Switch>
            </div>
        )
    }
}

export default Content