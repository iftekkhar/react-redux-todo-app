import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from './Redux/Actions';

const AddTodo = ({ dispatch }) => {

    let input;
    const addTask = e => {
        e.preventDefault();
        if (!input.value.trim()) return;
        dispatch(addTodo(input.value));
        input.value = '';
    }
    return (
        <div>
            <form onSubmit={addTask}>
                <input ref={node => input = node}></input>
                <button type="submit"> Add Todo</button>
            </form>
        </div>
    );
};

export default connect()(AddTodo);