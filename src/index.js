// import { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
// import React, { Component } from './components/simulateCreateElement/kReact.js';
// import ReactDOM from './components/simulateCreateElement/kReactDom.js';
import './index.css';
import Layout from './layout';

ReactDOM.render(
    <Layout/>
    , 
    document.getElementById('root')
);


// 测试自定义 React.createElement
// function Comp (props) {
//     return (
//         <div>{props.name}</div>
//     )
// }

// class Comp2 extends Component {
//     constructor (props) {
//         super(props)
//     }

//     render () {
//         return (
//             <div>{this.props.name}</div>
//         )
//     }
// }
// const user = [{name: 'a'}, {name: 'b'}] 
// const jsx = (
//     <div className="test"
//         style={{color: 'red', border: '1px solid green'}}
//         onClick={() => console.log(1)}>
//         1111
//         <p>22222</p>
//         <Comp name="函数组件"></Comp>
//         <Comp2 name="类组件"></Comp2>
//         <ul>
//             {
//                 user.map(item => {
//                     return (
//                         <li key={item.name}>{item.name}</li>
//                     )
//                 })
//             }
//         </ul>
//     </div>
// );


// ReactDOM.render(
//     jsx
//     , 
//     document.getElementById('rootTest')
// );

