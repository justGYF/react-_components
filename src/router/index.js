const { default: Todolist } = require("../components/todolist");
const { default: PropsDeep } = require("../components/propsdeep");
const { default: CounDown } = require("../components/timeComp");
const { default: HOC } = require("../components/hoc");
const { default: Composition } = require("../components/composition");

const routeList = [
    {
        path: '/todoList',
        label: 'TodoList',
        comp: Todolist
    },
    {
        path: '/propsDeep',
        label: 'PropsDeep',
        comp: PropsDeep,
        state: {
            color: '#000',
            num: 123,
            size: 'big'
        }
    },
    {
        path: '/coundown',
        label: 'CountDown',
        comp: CounDown
    },
    {
        path: '/hoc',
        label: '高阶组件测试',
        comp: HOC
    },
    {
        path: '/composition',
        label: '组件组合',
        comp: Composition
    }
]

export default routeList