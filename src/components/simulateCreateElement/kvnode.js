// 实现diff
export function createVNode (vtype, type, props) {
    const vnode = { vtype, type, props }
    return vnode
}

// 实现vnode -- dom的转化

export function initVNode (vnode) {
    
    const { vtype, props } = vnode

    if (!vtype) {
        // 没有vtype 判定为文本节点
        return document.createTextNode(vnode)
    }

    if (vtype === 1) {
        return createElement(vnode)
    } else if (vtype === 2) {
        return createClassElement(vnode)
    } else if (vtype === 3) {
        return createFuncElement(vnode)
    }
}

// 解析标签节点
function createElement(vnode) {
    console.log(vnode)
    const { type, props } = vnode
    const node = document.createElement(type)

    // 将特殊非原生属性独立出来
    const { key, children, ...rest } = props
    Object.keys(rest).forEach(k => {
        // react对某些原生属性有特殊写法,需要还原
        if (k === 'className') {
            node.setAttribute('class', rest[k])
        } else if (k === 'htmlFor') {
            node.setAttribute('for', rest[k])
        } else if (k === 'style' && typeof rest[k] === 'object') {
            // 行内样式
            const style = Object.keys(rest[k]).map(key => {
                return key + ':' + rest[k][key]
            }).join(';')
            node.setAttribute('style', style)
        } else if (k.startsWith('on')) {
            // 绑定事件
            const event = k.toLowerCase()
            node[event] = rest[k]
        } else {
            node.setAttribute(k, rest[k])
        }
    })
    // 有子节点,添加子节点
    children.forEach(el => {
        if ( el instanceof Array) {
            // 子节点为array
            el.forEach(n => node.appendChild(initVNode(n)))
        } else {
            node.appendChild(initVNode(el))
        }
    });
    return node
}
// 解析class节点
function createClassElement(vnode) {
    const { type, props } = vnode
    const component = new type(props)
    const vdom = component.render()
    return initVNode(vdom)
}
// 解析function节点
function createFuncElement(vnode) {
    const { type, props } = vnode
    const vdom = type(props)
    return initVNode(vdom)
}