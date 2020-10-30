import React from 'react';
import { connect } from 'react-redux'
import { updateTodo } from './Redux/Actions';

const EditTodo = ({ dispatch, todoid }) => {
    const handleEditTodo = id => {
        dispatch(updateTodo(id));
    }
    return (
        <button onClick={() => handleEditTodo(todoid)} >Edit</button>
    );
};

export default connect()(EditTodo);