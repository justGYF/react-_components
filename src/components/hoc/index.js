import React, { Component } from 'react'

// HOC -- 高阶组件，对组件进行属性添加，返回新的组件
const AddProps = Comp => {
    return props => (
        <Comp {...props} name="AddProps"></Comp>
    )
}

// HOC -- 高阶组件，对组件进行操作添加，返回新的组件
const AddActive = Comp => {
    const print = () => {
        console.log('addActive')
    }
    return props => (
        <div onClick={print}>
            <Comp {...props}></Comp>
        </div>
        
    )
}

// 原组件 - 无状态组件，纯展示组件，只展示，不处理逻辑
@AddProps
@AddActive
class ShowName extends Component {
    render () {
        console.log(this.props)
        return (
            <div>{ this.props.name }</div>
        )
    }
}


export default ShowName