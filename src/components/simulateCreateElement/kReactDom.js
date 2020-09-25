import { initVNode } from './kvnode'


// 实现ReactDom功能

function render (vnode, dom) {
    const node = initVNode(vnode)
    dom.appendChild(node)
    // dom.innerHTML = `<pre>${JSON.stringify(vnode, '', 2)}</pre>`
}

export default { render }