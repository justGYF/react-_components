const { default: Todolist } = require("../components/todolist");
const { default: PropsDeep } = require("../components/propsdeep");
const { default: CounDown } = require("../components/timeComp");

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
    }
]

export default routeList