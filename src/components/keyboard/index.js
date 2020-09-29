import React, { Component, Fragment } from 'react'
import KeyBoardBasis from './basis.js'
import keyboard from './keyboard.module.scss'
import keyArr from './keyData'

const name = "keyboard"

// 定义一个上下布局的小组件

function UpDownKey (props) {
    return (
        <Fragment>
            <p>{props.valueUp}</p>
            <p>{props.valueDown}</p>  
        </Fragment>
    )
}

class KeyBoard extends Component {

    constructor () {
        super()
        this.state = {
            upperOrLow: true,
            textValue: ''
        }
    }

    // 通过判断显示dom
    getKeyDom (its) {
        let content
        // 根据upperOrLow决定显示大小写字母，减少计算
        let isup = this.state.upperOrLow ? 'upper' : 'low'
        switch (its.type) {
            case 1:
                content = (<UpDownKey {...its} />)
                break;
            case 2:
                content = its.value
                break;
            case 3:
                content = its[isup]
                break;
            default: break;
        }
        return { content, its}
    }

    keyClick = (val) => {
        if (val.value === 'CapsLock') {
            this.setState({
                upperOrLow: !this.state.upperOrLow
            })
        }
    }

    render () {
        return (
            <div>
                <textarea rows="3" cols="109" readOnly value={this.state.textValue}/>
                <div className={keyboard[name]}>
                {
                    keyArr.map((item, ind) => {
                        return (
                            <div className={keyboard[`${name}-line`]} key={ind}>
                                {
                                    item.map((it, index) => {
                                        const {content, its} = this.getKeyDom(it)
                                        return (
                                            <KeyBoardBasis
                                                click={this.keyClick}
                                                key={index}
                                                {...its}>
                                                    {content}
                                            </KeyBoardBasis>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
            </div>
        )
    }
}


export default KeyBoard