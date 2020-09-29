import React, { Component } from 'react'
import keyboard from './keyboard.module.scss'

const name = "keyboard-line"
// 定义基础组件
// 展示键盘的宽高，内容值，提供点击回调

class KeyBoardBasis extends Component {
    constructor (props) {
        super()
    } 

    handleClick = () => {
        this.props.click(this.props)
    }

    render () {
        return (
            <div className={keyboard[`${name}-key`]}
                style={this.props.style}
                onClick={this.handleClick}>
                {this.props.children}
            </div>
        )
    }
}


export default KeyBoardBasis