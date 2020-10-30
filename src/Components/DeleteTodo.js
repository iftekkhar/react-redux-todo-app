import React from 'react';
import { connect } from 'react-redux'
import { deleteTodo } from './Redux/Actions';

const DeleteTodo = ({ dispatch, todoId }) => {
    const handleDeleteTodo = id => {
        dispatch(deleteTodo(id));
    }
    return (
        <button onClick={() => handleDeleteTodo(todoId)} >Delete</button>
    );
};

export default connect()(DeleteTodo);