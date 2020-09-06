import React, { Fragment } from 'react'
import countDown from './index.module.scss'

const name = 'countdown'
let timer = 0

// 倒计时组件
class CountDown extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            num: 0
        }
    }
    componentDidMount () {
        this.setState({
            num: this.props.num
        })

        timer = setInterval(() => {
            this.setState({
                num: this.state.num += 100
            })
        }, 1000)
    }

    componentDidUpdate (prevProps, prevState) {

        // 当输入值改变时，重新进行倒计时
        if (prevProps.num !== this.props.num) {
            clearInterval(timer)
            let newNum = typeof +this.props.num === 'number' ? +this.props.num : 0;

            timer = setInterval(() => {
                this.setState({
                    num: newNum += 100
                })
            }, 1000)
        }
    }

    render () {
        return (
            <h1>{this.state.num}</h1>
        )
    }
}

// 输入框组件
class InputValue extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }
    
    valueChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
        this.props.change(e.target.value)
    }

    render () {
        return (
            <Fragment>
                <input 
                    value={this.state.inputValue}
                    onChange={this.valueChange}
                    className={countDown[`${name}-inp`]}>    
                </input>
            </Fragment>
        )
    }
}

// 父组件
// 引用倒计时组件，输入框组件，输入框值改变，倒计时组件重置数据
// 数据流， 输入框 - 父组件 - 倒计时组件（模拟兄弟组件通信）
// 兄弟组件通信怎么做？
class CountDownContent extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            num: 0
        }
    }

    handleChange = (val) => {
        // 当输入框值改变，改变countDown组件的值
        this.setState({
            num: val
        })
    }

    render () {
        return (
            <div className={countDown[name]}>
                <InputValue change={this.handleChange}></InputValue>
                <CountDown num={this.state.num}></CountDown>
            </div>
        )
    }
}
export default CountDownContent