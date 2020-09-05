import React, { Component } from 'react'

class TodoItem extends Component {

    handleDelete = () => {
        this.props.delete(this.props.index)
    }
    render () {
        const { content, index } = this.props
        return (
            <li onClick={this.handleDelete}>
                <span>{index + 1}.</span>
                {content}
            </li>
        )
    }
}

export default TodoItem