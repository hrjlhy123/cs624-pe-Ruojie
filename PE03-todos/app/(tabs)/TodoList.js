import React from 'react'
import { View } from 'react-native'
import Todo from './Todo'

const TodoList = ({ todos, deleteChange, toggleComplete, type }) => {
    const filteredTodos = todos.filter(todo => {
        if (type == 'All') return true
        else if (type == 'Active') return !todo.complete
        else if (type == 'Complete') return todo.complete
    })

    return (
        <View>
            {filteredTodos.map((todo) => (
                <Todo
                    key={todo.todoIndex}
                    todo={todo} 
                    onDelete={deleteChange}
                    onToggleComplete={toggleComplete}
                />
            ))}
        </View>
    )
}

export default TodoList