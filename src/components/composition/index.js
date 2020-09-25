// 组件组合，react基本不需要使用继承
// 类似于vue的slot --- props.children

import React from 'react'

function Radio ({children, ...rest}) {
    return (
        <label>
            <input type="radio" {...rest}></input>
            {children}
        </label>
    )
}

function RadionGroup (props) {
    return (
        <div>
            {
                // React.Children可以对子节点进行遍历
                // React.cloneElement可以返回子节点的拷贝，并修改子节点
                // 子组件的属性不可以直接修改
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, {name: props.name})
                })
            }
        </div>
    )
}

export default function () {
    return (
        <div>
            <RadionGroup name="mvvm">
                <Radio value="vue">vue</Radio>
                <Radio value="react">react</Radio>
                <Radio value="angular">angular</Radio>
            </RadionGroup>
        </div>
    )
}