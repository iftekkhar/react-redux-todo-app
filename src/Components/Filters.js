import React from 'react';
import { connect } from 'react-redux';
import FilterLink from './FilterLink';
import { resetTodo, todoListFilters } from './Redux/Actions';

const Filters = ({ dispatch }) => {
    const resetList = e => {
        dispatch(resetTodo());
    }
    return (
        <div>
            <span>Show:</span>
            <FilterLink filter={todoListFilters.SHOW_ALL}>All</FilterLink>
            <FilterLink filter={todoListFilters.SHOW_ACTIVE}>Active</FilterLink>
            <FilterLink filter={todoListFilters.SHOW_COMPLETED}>Completed</FilterLink>
            <button style={{ marginLeft: '4px' }} onClick={resetList}>Reset</button>
        </div>
    );
};

export default connect()(Filters);