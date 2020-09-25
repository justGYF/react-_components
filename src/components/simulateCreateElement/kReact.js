// 实现createElement功能 --- 

function createElement (type, props, ...children) {
    delete props.__source
    delete props.__self
    props.children = children
    
    // vtype 1 - 原生标签, 2 - 类组件, 3 - 函数组件
    let vtype;
    if (typeof type === 'function') {
        vtype = type.isClassComponent ? 2 : 3 
    } else if (typeof type === 'string') {
        vtype = 1
    }

    return { vtype, type, props }
}

export default { createElement }

export class Component {
    static isClassComponent = true
    
    constructor (props) {
        this.props = props
        this.state = {

        }
    }

    setState () {

    }
}