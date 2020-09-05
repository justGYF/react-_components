const { default: Todolist } = require("../components/todolist");
const { default: PropsDeep } = require("../components/propsdeep");

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
    }
]

export default routeList