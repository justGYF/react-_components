const { default: Todolist } = require("../components/todolist");

const routeList = [
    {
        path: '/todoList',
        label: 'TodoList',
        comp: Todolist
    }
]

export default routeList