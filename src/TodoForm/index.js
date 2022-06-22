import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const [ newTodoValue, setNewTodoValue] = React.useState('');
    const { addTodo, setOpenModal } = React.useContext(TodoContext);
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    const onCancel = () => {
        setOpenModal(false)
    }
    const onSubmit = (e) => {
       e.preventDefault();
       if(newTodoValue){
           addTodo(newTodoValue);
           setOpenModal(false);
       }
    }
    return (
        <form onSubmit={onSubmit} className="TodoForm">
            <label>Escribe un nuevo TODO</label>
            <textarea
                placeholder='Haré ejercicio'
                onChange={onChange}
                value={newTodoValue}
            />
            <div className='buttonContainer'>
                <button
                    type="button"
                    onClick={onCancel}
                    className="TodoFormButton form-button-cancel"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoFormButton form-button-add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm };