import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton() {
    const {openModal, setOpenModal} = React.useContext(TodoContext);
    const onClickButton = () => {
        setOpenModal(prevState => !prevState)
    }

    return (
        <button
            className={`CreateTodoButton ${openModal && 'CreateTodoButton--close'}`}
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton };