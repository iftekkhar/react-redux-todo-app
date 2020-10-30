import React from 'react';
import { connect } from 'react-redux'
import { deleteTodo } from './Redux/Actions';

const DeleteTodo = ({ dispatch, todoid }) => {
    const handleDeleteTodo = id => {
        dispatch(deleteTodo(id));
    }
    return (
        <button onClick={() => handleDeleteTodo(todoid)} >Delete</button>
    );
};

export default connect()(DeleteTodo);