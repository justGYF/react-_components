import React, { Component } from 'react'

// HOC -- 高阶组件，对组件进行属性添加，返回新的组件
const AddProps = Comp => {
    return props => (
        <Comp {...props} name="AddProps"></Comp>
    )
}

// HOC -- 高阶组件，对组件进行操作添加，返回新的组件
const AddActive = Comp => {

    return class extends Component {
        constructor () {
            super()
            this.state = {
                num: 1
            }
        }

        print = () => {
            // preState指改变前的state, props指更新后的
            this.setState((preState, props) => {
                console.log(this.state.num + 1)
                return {
                    num: preState.num + 1
                }
            })
        }

        render () {
            console.log(this.props)
            return (
                <Comp {...this.props} click={this.print} ss='s'></Comp>
            )
        }
    }
}

// 原组件 - 无状态组件，纯展示组件，只展示，不处理逻辑
@AddProps
@AddActive
class ShowName extends Component {
    render () {
        return (
            <div onClick={this.props.click}>{ this.props.name }</div>
        )
    }
}

// const compose = (...arg) => {
//     if (arg.length === 0) {
//         return arg => arg
//     }

//     if (arg.length === 1) {
//         return arg[0]()
//     }

//     return arg.reduce((a, b) => {
//         return (...args) => (
//             a(b(...args))
//         )
//     })
// }

// const a = compose(AddActive, AddProps)(ShowName)

export default ShowName