import React from 'react';
import { connect } from 'react-redux';
import { setTodoListFilter } from './Redux/Actions';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.todoListFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setTodoListFilter(ownProps.filter))
})

const FilterLink = ({ active, children, onClick }) => {
    return (
        <button
            onClick={onClick}
            disabled={active}
            style={{ marginLeft: '4px' }}
        >
            {children}
        </button>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);