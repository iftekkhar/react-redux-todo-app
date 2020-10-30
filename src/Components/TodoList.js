import React from 'react';
import { connect } from 'react-redux'
import DeleteTodo from './DeleteTodo';
import EditTodo from './EditTodo';
import { todoListFilters, toggleTodo } from './Redux/Actions';

const getTodoList = (todos, filter) => {
    switch (filter) {
        case todoListFilters.SHOW_ALL:
            return todos;
        case todoListFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        case todoListFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        default:
            throw new Error('Unknown filter' + filter);
    }
}


const mapStateToProps = state => {
    return ({
        todos: getTodoList(state.todos, state.todoListFilter)
    })
}
const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: id => dispatch(toggleTodo(id))

    }
}

const TodoList = ({ todos, toggleTodo }) => {

    return (
        <div>
            <ul>{
                todos.map((todo) => (

                    <li
                        key={todo.id}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    >

                        {todo.text}
                        <button onClick={() => toggleTodo(todo.id)} >Complete</button>
                        <DeleteTodo todoid={todo.id}></DeleteTodo>
                        <EditTodo todoid={todo.id}></EditTodo>

                    </li>


                ))
            }

            </ul>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);