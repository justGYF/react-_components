import React from 'react'

class Display extends React.Component {
    render () {
        // 只能以这种形式打印这个字符吗？
        const str = `{...this.pros}`
        return (
            <div>
                <h1>{ this.props.color }</h1>
                <h1>{ this.props.num }</h1>
                <h1>{ this.props.size }</h1>
                <p>测试多层级嵌套组件，通过${str}的形式传递值</p>
                <p>测试路由传参，state</p>
            </div>
        )
    }
}

class Label extends React.Component {
    render () {
        return (
            <Display { ...this.props }></Display>
        )
    }
}

class PropsDeep extends React.Component {
    render () {
        const routerState = this.props.location.state
        return (
            <Label { ...routerState }></Label>
        )
    }
}

export default PropsDeep