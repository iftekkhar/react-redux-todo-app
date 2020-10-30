import React, { useState } from 'react';
import { connect } from 'react-redux'
import { updateTodo } from './Redux/Actions';
import Modal from 'react-modal';

Modal.setAppElement('#root')

const EditTodo = ({ dispatch, todoId, todoText }) => {

    // Modal State & Functions 
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() { setIsOpen(true); }
    function closeModal() { setIsOpen(false); }

    // Input value State
    const [innerText, setInnerText] = useState(todoText)
    let input;
    const todoListId = todoId;

    const handleTextChange = (e) => {
        setInnerText(e.target.value)
    }
    const handleEditTodoList = (e) => {
        e.preventDefault()
        dispatch(updateTodo(todoListId, innerText));
        closeModal();
    }

    return (
        <>
            <button onClick={openModal}>Edit Text</button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <form onSubmit={handleEditTodoList}>
                    <input onChange={handleTextChange} value={innerText}></input>
                    <button type='submit' >update</button>
                </form>
            </Modal>
        </>
    );
};

export default connect()(EditTodo);